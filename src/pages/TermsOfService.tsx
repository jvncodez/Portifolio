import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';

const TermsOfServiceContent = () => {
  const { lang } = useLanguage();
  
  const content = {
    pt: {
      title: 'Termos de Serviço',
      lastUpdate: 'Última atualização: 05 de Fevereiro de 2026',
      backHome: 'Voltar ao Início',
      sections: [
        {
          title: '1. Aceitação dos Termos',
          text: 'Ao acessar este site e utilizar o formulário de contato, o usuário declara estar ciente e de acordo com os presentes Termos de Serviço.'
        },
        {
          title: '2. Natureza do Site',
          text: 'Este site possui caráter exclusivamente informativo e profissional, com o objetivo de:',
          list: ['Apresentar portfólio', 'Exibir projetos', 'Demonstrar habilidades técnicas', 'Permitir contato profissional'],
          note: 'Não se trata de plataforma de venda direta ou e-commerce.'
        },
        {
          title: '3. Uso do Formulário de Contato',
          text: 'O formulário de contato deve ser utilizado exclusivamente para fins profissionais e legítimos, incluindo:',
          list: ['Oportunidades de trabalho', 'Propostas comerciais', 'Parcerias', 'Dúvidas profissionais'],
          prohibited: 'É proibido utilizar o formulário para:',
          prohibitedList: ['Spam', 'Conteúdo ofensivo', 'Atividades ilícitas', 'Tentativas de engenharia social']
        },
        {
          title: '4. Propriedade Intelectual',
          text: 'Todo o conteúdo deste site, incluindo:',
          list: ['Textos', 'Layout', 'Estrutura', 'Projetos apresentados', 'Identidade visual'],
          note: 'É de propriedade de João Silva, salvo quando indicado de outra forma. Não é permitida reprodução sem autorização prévia.'
        },
        {
          title: '5. Limitação de Responsabilidade',
          text: 'As informações disponibilizadas neste site têm caráter informativo e podem ser atualizadas a qualquer momento. Não há garantia de disponibilidade contínua do site.'
        },
        {
          title: '6. Links Externos',
          text: 'Este site pode conter links para:',
          list: ['LinkedIn', 'Instagram', 'WhatsApp', 'Outros serviços externos'],
          note: 'O uso desses serviços está sujeito às políticas próprias de cada plataforma.'
        },
        {
          title: '7. Modificações',
          text: 'Os Termos de Serviço podem ser atualizados a qualquer momento sem aviso prévio.'
        },
        {
          title: '8. Foro',
          text: 'Fica eleito o foro da comarca de residência do titular do site para dirimir quaisquer controvérsias decorrentes destes termos.'
        }
      ]
    },
    en: {
      title: 'Terms of Service',
      lastUpdate: 'Last updated: February 05, 2026',
      backHome: 'Back to Home',
      sections: [
        {
          title: '1. Acceptance of Terms',
          text: 'By accessing this site and using the contact form, the user declares to be aware of and agrees to these Terms of Service.'
        },
        {
          title: '2. Nature of the Site',
          text: 'This site is exclusively informational and professional in nature, with the objective of:',
          list: ['Presenting portfolio', 'Displaying projects', 'Demonstrating technical skills', 'Enabling professional contact'],
          note: 'This is not a direct sales platform or e-commerce.'
        },
        {
          title: '3. Use of Contact Form',
          text: 'The contact form must be used exclusively for professional and legitimate purposes, including:',
          list: ['Job opportunities', 'Business proposals', 'Partnerships', 'Professional inquiries'],
          prohibited: 'It is prohibited to use the form for:',
          prohibitedList: ['Spam', 'Offensive content', 'Illegal activities', 'Social engineering attempts']
        },
        {
          title: '4. Intellectual Property',
          text: 'All content on this site, including:',
          list: ['Texts', 'Layout', 'Structure', 'Presented projects', 'Visual identity'],
          note: 'Is the property of João Silva, unless otherwise indicated. Reproduction without prior authorization is not permitted.'
        },
        {
          title: '5. Limitation of Liability',
          text: 'The information provided on this site is for informational purposes and may be updated at any time. There is no guarantee of continuous site availability.'
        },
        {
          title: '6. External Links',
          text: 'This site may contain links to:',
          list: ['LinkedIn', 'Instagram', 'WhatsApp', 'Other external services'],
          note: 'The use of these services is subject to the policies of each platform.'
        },
        {
          title: '7. Modifications',
          text: 'The Terms of Service may be updated at any time without prior notice.'
        },
        {
          title: '8. Jurisdiction',
          text: 'The forum of the site owner\'s residence is elected to resolve any disputes arising from these terms.'
        }
      ]
    },
    es: {
      title: 'Términos de Servicio',
      lastUpdate: 'Última actualización: 05 de Febrero de 2026',
      backHome: 'Volver al Inicio',
      sections: [
        {
          title: '1. Aceptación de los Términos',
          text: 'Al acceder a este sitio y utilizar el formulario de contacto, el usuario declara estar consciente y de acuerdo con estos Términos de Servicio.'
        },
        {
          title: '2. Naturaleza del Sitio',
          text: 'Este sitio tiene carácter exclusivamente informativo y profesional, con el objetivo de:',
          list: ['Presentar portafolio', 'Exhibir proyectos', 'Demostrar habilidades técnicas', 'Permitir contacto profesional'],
          note: 'No se trata de una plataforma de venta directa o e-commerce.'
        },
        {
          title: '3. Uso del Formulario de Contacto',
          text: 'El formulario de contacto debe utilizarse exclusivamente para fines profesionales y legítimos, incluyendo:',
          list: ['Oportunidades de trabajo', 'Propuestas comerciales', 'Asociaciones', 'Consultas profesionales'],
          prohibited: 'Está prohibido utilizar el formulario para:',
          prohibitedList: ['Spam', 'Contenido ofensivo', 'Actividades ilícitas', 'Intentos de ingeniería social']
        },
        {
          title: '4. Propiedad Intelectual',
          text: 'Todo el contenido de este sitio, incluyendo:',
          list: ['Textos', 'Diseño', 'Estructura', 'Proyectos presentados', 'Identidad visual'],
          note: 'Es propiedad de João Silva, salvo cuando se indique lo contrario. No está permitida la reproducción sin autorización previa.'
        },
        {
          title: '5. Limitación de Responsabilidad',
          text: 'La información proporcionada en este sitio tiene carácter informativo y puede actualizarse en cualquier momento. No hay garantía de disponibilidad continua del sitio.'
        },
        {
          title: '6. Enlaces Externos',
          text: 'Este sitio puede contener enlaces a:',
          list: ['LinkedIn', 'Instagram', 'WhatsApp', 'Otros servicios externos'],
          note: 'El uso de estos servicios está sujeto a las políticas propias de cada plataforma.'
        },
        {
          title: '7. Modificaciones',
          text: 'Los Términos de Servicio pueden actualizarse en cualquier momento sin previo aviso.'
        },
        {
          title: '8. Jurisdicción',
          text: 'Se elige el foro de la comarca de residencia del titular del sitio para resolver cualquier controversia derivada de estos términos.'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Back Link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backHome}
            </Link>

            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{t.title}</h1>
              <p className="text-muted-foreground">{t.lastUpdate}</p>
            </div>

            {/* Content */}
            <div className="space-y-8 mt-12">
              {t.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="space-y-3"
                >
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                  {section.list && (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.prohibited && (
                    <>
                      <p className="text-muted-foreground font-medium mt-4">{section.prohibited}</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        {section.prohibitedList?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {section.note && (
                    <p className="text-muted-foreground italic text-sm">{section.note}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const TermsOfService = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TermsOfServiceContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default TermsOfService;
