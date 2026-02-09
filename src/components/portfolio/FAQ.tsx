import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* CSS decorative */}
      <div className="absolute top-32 right-20 w-16 h-16 border border-primary/10 rounded-xl pointer-events-none animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faq.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AccordionItem
                  value={`item-${i}`}
                  className="glass-card px-6 data-[state=open]:border-primary/40 data-[state=open]:glow-primary transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
