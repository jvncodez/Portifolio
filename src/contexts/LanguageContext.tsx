import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

const translations = {
  pt: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      blog: 'Blog',
      services: 'Serviços',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      badge: 'Disponível para novos projetos',
      title: 'ARQUITETURAS DIGITAIS RESILIENTES',
      subtitle: 'Eu não atuo apenas na implementação de funcionalidades — eu projeto estruturas resilientes. Atuo projetando arquiteturas seguras, integrando sistemas e organizando fluxos de dados com mentalidade de longo prazo.',
      cta: 'Ver Portfólio',
      experience: 'Anos Exp.',
    },
    services: {
      title: 'Serviços de IA & Tecnologia',
      items: [
        { title: 'Arquitetura Backend', desc: 'APIs robustas, modularidade e Clean Code para sistemas escaláveis.' },
        { title: 'CyberSecurity', desc: 'Segurança desde o design, protegendo ativos e rotas críticas.' },
        { title: 'DevOps / Cloud', desc: 'Gerenciamento de infraestrutura em nuvem e containers (Docker).' },
        { title: 'Automação (n8n)', desc: 'Workflows inteligentes para otimizar processos operacionais.' },
        { title: 'Dados & Integrações', desc: 'Sincronização de dados complexos entre plataformas.' },
        { title: 'Consultoria', desc: 'Estratégia tecnológica e mentoria para times de dev.' },
      ],
    },
    projects: {
      title: 'Software & Projetos',
      subtitle: 'Vitrine de sistemas avançados e soluções SaaS que desenvolvi.',
      viewDetails: 'Ver detalhes',
      modal: {
        details: 'Detalhes do Projeto',
        stack: 'Tecnologias',
        goal: 'Objetivo',
        solution: 'Solução',
      },
    },
    testimonials: {
      title: 'Depoimentos',
    },
    hire: {
      title: 'Contrate-me',
      subtitle: 'Vamos trabalhar juntos para criar soluções inovadoras usando tecnologia avançada.',
      form: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!',
      },
    },
    faq: {
      title: 'Perguntas Frequentes',
      items: [
        { q: 'Quais tecnologias você utiliza para automação?', a: 'Utilizo n8n, Python e Node.js para criar fluxos de trabalho que conectam diferentes APIs e bancos de dados.' },
        { q: 'Como funciona a segurança nas suas arquiteturas?', a: 'Implemento segurança desde o design (Security by Design), utilizando autenticação robusta e sanitização de dados.' },
        { q: 'Você atua em projetos internacionais?', a: 'Sim, possuo espanhol avançado e inglês técnico para comunicação e documentação global.' },
        { q: 'Qual seu stack principal para Backend?', a: 'Node.js (TypeScript) e Python são minhas ferramentas principais para criar APIs escaláveis.' },
      ],
    },
    footer: {
      description: 'Projetando o futuro da tecnologia com arquitetura sólida, automação inteligente e segurança total.',
      quickLinks: 'Links Rápidos',
      newsletter: 'Newsletter',
      subscribe: 'Inscrever-se',
      legal: 'Informações Legais',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      copyright: 'DESIGNED AND DEVELOPED BY JOÃO SILVA © 2026',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      blog: 'Blog',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for new projects',
      title: 'PIONEERING RESILIENT ARCHITECTURES',
      subtitle: "I don't just implement features — I design resilient structures. I architect secure systems, integrate platforms, and organize data flows with a long-term mindset.",
      cta: 'View Portfolio',
      experience: 'Years Exp.',
    },
    services: {
      title: 'AI & Tech Services',
      items: [
        { title: 'Backend Architecture', desc: 'Robust APIs, modularity, and Clean Code for scalable systems.' },
        { title: 'CyberSecurity', desc: 'Security by design, protecting critical assets and routes.' },
        { title: 'DevOps / Cloud', desc: 'Cloud infrastructure management and containers (Docker).' },
        { title: 'Automation (n8n)', desc: 'Smart workflows to optimize operational processes.' },
        { title: 'Data & Integrations', desc: 'Complex data synchronization between platforms.' },
        { title: 'Consulting', desc: 'Tech strategy and mentorship for development teams.' },
      ],
    },
    projects: {
      title: 'Software & Projects',
      subtitle: "Showcase of advanced systems and SaaS solutions I've built.",
      viewDetails: 'View details',
      modal: {
        details: 'Project Details',
        stack: 'Stack',
        goal: 'Goal',
        solution: 'Solution',
      },
    },
    testimonials: {
      title: 'Testimonials',
    },
    hire: {
      title: 'Hire Me',
      subtitle: "Let's work together to create innovative solutions using advanced technology.",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What technologies do you use for automation?', a: 'I use n8n, Python, and Node.js to create workflows that connect different APIs and databases.' },
        { q: 'How does security work in your architectures?', a: 'I implement Security by Design, using robust authentication and data sanitization.' },
        { q: 'Do you work on international projects?', a: 'Yes, I have advanced Spanish and technical English for global communication and documentation.' },
        { q: 'What is your main Backend stack?', a: 'Node.js (TypeScript) and Python are my main tools for creating scalable APIs.' },
      ],
    },
    footer: {
      description: 'Designing the future of technology with solid architecture, smart automation, and total security.',
      quickLinks: 'Quick Links',
      newsletter: 'Newsletter',
      subscribe: 'Subscribe',
      legal: 'Legal Stuff',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'DESIGNED AND DEVELOPED BY JOÃO SILVA © 2026',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      blog: 'Blog',
      services: 'Servicios',
      about: 'Sobre',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      title: 'ARQUITECTURAS DIGITALES RESILIENTES',
      subtitle: 'No solo implemento funcionalidades: diseño estructuras resilientes. Diseño arquitecturas seguras, integro sistemas y organizo flujos de datos.',
      cta: 'Ver Portafolio',
      experience: 'Años Exp.',
    },
    services: {
      title: 'Servicios de IA y Tecnología',
      items: [
        { title: 'Arquitectura Backend', desc: 'APIs robustas, modularidad y Clean Code para sistemas escalables.' },
        { title: 'Ciberseguridad', desc: 'Seguridad desde el diseño, protegiendo activos y rutas críticas.' },
        { title: 'DevOps / Cloud', desc: 'Gestión de infraestructura en la nube y contenedores (Docker).' },
        { title: 'Automatización (n8n)', desc: 'Flujos de trabajo inteligentes para optimizar procesos.' },
        { title: 'Datos e Integraciones', desc: 'Sincronización de datos complejos entre plataformas.' },
        { title: 'Consultoría', desc: 'Estrategia tecnológica y mentoría para equipos de desarrollo.' },
      ],
    },
    projects: {
      title: 'Software y Proyectos',
      subtitle: 'Muestra de sistemas avanzados y soluciones SaaS que he desarrollado.',
      viewDetails: 'Ver detalles',
      modal: {
        details: 'Detalles del Proyecto',
        stack: 'Tecnologías',
        goal: 'Objetivo',
        solution: 'Solución',
      },
    },
    testimonials: {
      title: 'Testimonios',
    },
    hire: {
      title: 'Contrátame',
      subtitle: 'Trabajemos juntos para crear soluciones innovadoras utilizando tecnología avanzada.',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        success: '¡Mensaje enviado con éxito!',
      },
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        { q: '¿Qué tecnologías usas para automatización?', a: 'Uso n8n, Python y Node.js para crear flujos de trabajo que conectan diferentes APIs y bases de datos.' },
        { q: '¿Cómo funciona la seguridad en tus arquitecturas?', a: 'Implemento Seguridad por Diseño, usando autenticación robusta y sanitización de datos.' },
        { q: '¿Trabajas en proyectos internacionales?', a: 'Sí, tengo español avanzado e inglés técnico para comunicación y documentación global.' },
        { q: '¿Cuál es tu stack principal para Backend?', a: 'Node.js (TypeScript) y Python son mis herramientas principales para crear APIs escalables.' },
      ],
    },
    footer: {
      description: 'Diseñando el futuro de la tecnología con arquitectura sólida, automatización inteligente y seguridad total.',
      quickLinks: 'Enlaces Rápidos',
      newsletter: 'Boletín',
      subscribe: 'Suscribirse',
      legal: 'Asuntos Legales',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      copyright: 'DISEÑADO Y DESARROLLADO POR JOÃO SILVA © 2026',
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Language) || 'pt';
    }
    return 'pt';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang) {
      setLangState(savedLang);
    }
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
