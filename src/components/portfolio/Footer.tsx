import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.about, href: '#about' },
  ];

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
            <p className="text-muted-foreground text-sm">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
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
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
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
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">{t.footer.newsletter}</h4>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="email@exemplo.com"
                className="flex-1"
              />
              <Button size="icon" type="submit">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center">
            {t.footer.copyright}
          </p>
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
