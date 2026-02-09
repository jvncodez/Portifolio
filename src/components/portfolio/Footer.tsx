import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalData } from '@/data/personal.loader';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: personalData.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: personalData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: personalData.socialLinks.instagram, label: 'Instagram' },
  ];

  const quickLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.about, href: '#about' },
  ];

  return (
    <footer className="py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a href="#hero" className="flex items-center gap-1 text-2xl font-bold">
              <span className="text-primary">Jvn</span>
              <span className="text-foreground">Codes</span>
            </a>
            <p className="text-muted-foreground text-sm">{t.footer.description}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass glass-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i} className="hover:translate-x-1 transition-transform duration-200">
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center">{t.footer.copyright}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>@jvncodes</span>
            <span>@ventturehearth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
