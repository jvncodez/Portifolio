import type { VercelRequest, VercelResponse } from '@vercel/node';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY || '';
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',').map(o => o.trim()).filter(Boolean);

// In-memory rate limiting (per serverless instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET) return true; // Skip if not configured

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(RECAPTCHA_SECRET)}&response=${encodeURIComponent(token)}`,
    });
    const data = await res.json();
    return data.success && data.score >= 0.5;
  } catch {
    return false;
  }
}

function sanitize(str: string, maxLen: number): string {
  return str.replace(/[<>]/g, '').trim().slice(0, maxLen);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.length > 0 && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Try again later.' });
  }

  const { name, email, message, recaptchaToken } = req.body || {};

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Validate types and lengths
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid field types' });
  }

  const cleanName = sanitize(name, 100);
  const cleanEmail = sanitize(email, 255);
  const cleanMessage = sanitize(message, 1000);

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ error: 'Fields cannot be empty' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  // reCAPTCHA verification
  if (recaptchaToken) {
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return res.status(403).json({ error: 'reCAPTCHA verification failed' });
    }
  } else if (RECAPTCHA_SECRET) {
    return res.status(400).json({ error: 'reCAPTCHA token required' });
  }

  // Build WhatsApp URL server-side (number never exposed to client)
  if (!WHATSAPP_NUMBER) {
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  const whatsappText = encodeURIComponent(
    `Olá, me chamo ${cleanName}, meu email é o ${cleanEmail}, estou entrando em contato devido: ${cleanMessage}`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  return res.status(200).json({ url: whatsappUrl });
}
