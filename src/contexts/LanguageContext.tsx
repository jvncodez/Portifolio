import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

const translations = {
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      about: 'Sobre',
      projects: 'Projetos',
      testimonials: 'Depoimentos',
      contact: 'Contato',
    },
    hero: {
      badge: 'Disponível para novos projetos',
      title: 'ARQUITETURAS DIGITAIS RESILIENTES',
      subtitlePre: 'Eu me chamo ',
      subtitleName: 'João Silva',
      subtitlePost: ' e não atuo apenas na implementação de funcionalidades. u projeto estruturas resilientes. Atuo projetando arquiteturas seguras, integrando sistemas e organizando fluxos de dados com mentalidade de longo prazo.',
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
    certifications: {
      title: 'Certificações',
      items: [
        { category: 'Cloud', items: ['AWS Training – AWS Academy'] },
        { category: 'JavaScript', items: ['Intensivo de JavaScript – Hashtag Treinamentos'] },
        { category: 'Automação', items: ['Automação com Arduino e ESP32 – Crescer Indústria de Automações'] },
        { category: 'CyberSecurity', items: ['Introdução à CyberSecurity – Cisco', 'CyberSecurity – Cisco'] },
        { category: 'Python', items: ['Python – Santander Academy'] },
        { category: 'Versionamento', items: ['Git e GitHub – DIO', 'Git e GitHub – Santander Academy'] },
      ],
      philosophy: {
        title: 'Filosofia Técnica',
        belief: 'Sistemas não devem apenas funcionar — devem resistir.',
        pillars: [
          { title: 'Arquitetura', subtitle: 'é estrutura.' },
          { title: 'Segurança', subtitle: 'é fundação.' },
          { title: 'Escalabilidade', subtitle: 'é planejamento.' },
        ],
        mission: 'Minha missão é projetar soluções inovadoras e estruturalmente seguras, porque um barco sem casco não chega nem ao rio.',
      },
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
    about: {
      title: 'Sobre Mim',
      intro: 'Sou Coordenador de Desenvolvimento e Operação com forte atuação em CyberSecurity, arquitetura de software e soluções SaaS.',
      skills: 'Tenho experiência com Python aplicado a agentes de Inteligência Artificial, análise de vulnerabilidades, desenvolvimento backend com Node.js e TypeScript, além de integração de APIs e automações utilizando n8n e Supabase Edge Functions.',
      highlights: {
        security: 'CyberSecurity',
        backend: 'Backend',
        automation: 'Automação',
      },
      coreStack: {
        title: 'Core Stack',
      },
      education: {
        title: 'Formação',
        technical: 'Técnico em Desenvolvimento de Sistemas - ETE Luiz Alves Lacerda',
        university: 'Análise e Desenvolvimento de Sistemas - Universidade Boa Viagem (cursando)',
      },
      mission: {
        title: 'Missão',
        text: 'Minha missão é criar soluções inovadoras e proteger ambientes digitais, pois um barco sem casco não chega nem ao rio.',
      },
    },
    systemAlert: {
      label: 'ALERTA SISTÊMICO',
      text: 'Isso já está acontecendo. Empresas estão substituindo atendentes e closers humanos por sistemas de IA enquanto a maioria ainda discute ferramenta. Não é tendência. É infraestrutura sendo trocada.',
    },
    testimonials: {
      title: 'Depoimentos',
    },
    hire: {
      title: 'Entre em Contato',
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
      services: 'Services',
      about: 'About',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for new projects',
      title: 'PIONEERING RESILIENT ARCHITECTURES',
      subtitlePre: 'My name is ',
      subtitleName: 'João Silva',
      subtitlePost: " and I don't just implement features I design resilient structures. I architect secure systems, integrate platforms, and organize data flows with a long-term mindset.",
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
    certifications: {
      title: 'Certifications',
      items: [
        { category: 'Cloud', items: ['AWS Training – AWS Academy'] },
        { category: 'JavaScript', items: ['JavaScript Intensive – Hashtag Treinamentos'] },
        { category: 'Automation', items: ['Automation with Arduino and ESP32 – Crescer Automation Industry'] },
        { category: 'CyberSecurity', items: ['Introduction to CyberSecurity – Cisco', 'CyberSecurity – Cisco'] },
        { category: 'Python', items: ['Python – Santander Academy'] },
        { category: 'Version Control', items: ['Git and GitHub – DIO', 'Git and GitHub – Santander Academy'] },
      ],
      philosophy: {
        title: 'Technical Philosophy',
        belief: 'Systems should not just work — they must resist.',
        pillars: [
          { title: 'Architecture', subtitle: 'is structure.' },
          { title: 'Security', subtitle: 'is foundation.' },
          { title: 'Scalability', subtitle: 'is planning.' },
        ],
        mission: 'My mission is to design innovative and structurally secure solutions, because a boat without a hull won\'t even reach the river.',
      },
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
    about: {
      title: 'About Me',
      intro: "I'm a Development and Operations Coordinator with strong expertise in CyberSecurity, software architecture, and SaaS solutions.",
      skills: 'I have experience with Python for AI agents, vulnerability analysis, backend development with Node.js and TypeScript, plus API integrations and automations using n8n and Supabase Edge Functions.',
      highlights: {
        security: 'CyberSecurity',
        backend: 'Backend',
        automation: 'Automation',
      },
      coreStack: {
        title: 'Core Stack',
      },
      education: {
        title: 'Education',
        technical: 'Systems Development Technician - ETE Luiz Alves Lacerda',
        university: 'Systems Analysis and Development - Boa Viagem University (in progress)',
      },
      mission: {
        title: 'Mission',
        text: "My mission is to create innovative solutions and protect digital environments, because a boat without a hull won't even reach the river.",
      },
    },
    systemAlert: {
      label: 'SYSTEMIC ALERT',
      text: "This is already happening. Companies are replacing human agents and closers with AI systems while most people are still debating tools. It's not a trend. It's infrastructure being replaced.",
    },
    testimonials: {
      title: 'Testimonials',
    },
    hire: {
      title: 'Get in Touch',
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
      services: 'Servicios',
      about: 'Sobre',
      projects: 'Proyectos',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      title: 'ARQUITECTURAS DIGITALES RESILIENTES',
      subtitlePre: 'Me llamo ',
      subtitleName: 'João Silva',
      subtitlePost: ' y no solo implemento funcionalidades diseño estructuras resilientes. Diseño arquitecturas seguras, integro sistemas y organizo flujos de datos con mentalidad a largo plazo.',
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
    certifications: {
      title: 'Certificaciones',
      items: [
        { category: 'Cloud', items: ['AWS Training – AWS Academy'] },
        { category: 'JavaScript', items: ['Intensivo de JavaScript – Hashtag Treinamentos'] },
        { category: 'Automatización', items: ['Automatización con Arduino y ESP32 – Crescer Industria de Automatización'] },
        { category: 'Ciberseguridad', items: ['Introducción a Ciberseguridad – Cisco', 'Ciberseguridad – Cisco'] },
        { category: 'Python', items: ['Python – Santander Academy'] },
        { category: 'Versionamiento', items: ['Git y GitHub – DIO', 'Git y GitHub – Santander Academy'] },
      ],
      philosophy: {
        title: 'Filosofía Técnica',
        belief: 'Los sistemas no solo deben funcionar — deben resistir.',
        pillars: [
          { title: 'Arquitectura', subtitle: 'es estructura.' },
          { title: 'Seguridad', subtitle: 'es fundamento.' },
          { title: 'Escalabilidad', subtitle: 'es planificación.' },
        ],
        mission: 'Mi misión es diseñar soluciones innovadoras y estructuralmente seguras, porque un barco sin casco no llega ni al río.',
      },
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
    about: {
      title: 'Sobre Mí',
      intro: 'Soy Coordinador de Desarrollo y Operación con fuerte actuación en Ciberseguridad, arquitectura de software y soluciones SaaS.',
      skills: 'Tengo experiencia con Python aplicado a agentes de Inteligencia Artificial, análisis de vulnerabilidades, desarrollo backend con Node.js y TypeScript, además de integración de APIs y automatizaciones usando n8n y Supabase Edge Functions.',
      highlights: {
        security: 'Ciberseguridad',
        backend: 'Backend',
        automation: 'Automatización',
      },
      coreStack: {
        title: 'Core Stack',
      },
      education: {
        title: 'Formación',
        technical: 'Técnico en Desarrollo de Sistemas - ETE Luiz Alves Lacerda',
        university: 'Análisis y Desarrollo de Sistemas - Universidad Boa Viagem (cursando)',
      },
      mission: {
        title: 'Misión',
        text: 'Mi misión es crear soluciones innovadoras y proteger ambientes digitales, porque un barco sin casco no llega ni al río.',
      },
    },
    systemAlert: {
      label: 'ALERTA SISTÉMICA',
      text: 'Esto ya está sucediendo. Las empresas están reemplazando agentes y closers humanos por sistemas de IA mientras la mayoría aún debate herramientas. No es tendencia. Es infraestructura siendo reemplazada.',
    },
    testimonials: {
      title: 'Testimonios',
    },
    hire: {
      title: 'Ponte en Contacto',
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
