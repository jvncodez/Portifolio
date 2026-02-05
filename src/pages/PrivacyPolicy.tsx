import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';

const PrivacyPolicyContent = () => {
  const { lang } = useLanguage();
  
  const content = {
    pt: {
      title: 'Política de Privacidade',
      lastUpdate: 'Última atualização: 05 de Fevereiro de 2026',
      backHome: 'Voltar ao Início',
      sections: [
        {
          title: '1. Introdução',
          text: 'Esta Política de Privacidade descreve como João Silva coleta, utiliza e protege as informações fornecidas por usuários, clientes e recrutadores ao utilizar este portfólio profissional. O compromisso é garantir transparência, segurança e conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).'
        },
        {
          title: '2. Dados Coletados',
          text: 'Ao utilizar o formulário de contato deste site, poderão ser coletadas as seguintes informações:',
          list: ['Nome', 'Endereço de e-mail', 'Número de telefone', 'Mensagem enviada', 'Outras informações fornecidas voluntariamente pelo usuário'],
          note: 'Esses dados são fornecidos diretamente pelo usuário por meio do formulário.'
        },
        {
          title: '3. Finalidade do Uso dos Dados',
          text: 'Os dados coletados são utilizados exclusivamente para:',
          list: ['Responder mensagens enviadas via formulário', 'Entrar em contato via WhatsApp, e-mail ou telefone', 'Estabelecer comunicação profissional', 'Avaliação de oportunidades de trabalho ou propostas comerciais'],
          note: 'Nenhuma informação é vendida, compartilhada ou comercializada com terceiros.'
        },
        {
          title: '4. Compartilhamento de Dados',
          text: 'Os dados poderão ser processados por serviços de terceiros estritamente necessários para comunicação, como:',
          list: ['WhatsApp (Meta Platforms)', 'Serviços de hospedagem do site', 'Serviços de envio de e-mail'],
          note: 'Esses terceiros possuem suas próprias políticas de privacidade.'
        },
        {
          title: '5. Armazenamento e Segurança',
          text: 'As informações são tratadas com medidas técnicas e organizacionais adequadas para proteger contra:',
          list: ['Acesso não autorizado', 'Alteração indevida', 'Divulgação não autorizada', 'Perda de dados'],
          note: 'Os dados são armazenados apenas pelo tempo necessário para cumprir a finalidade de contato.'
        },
        {
          title: '6. Direitos do Titular (LGPD)',
          text: 'Nos termos da LGPD, o usuário pode solicitar:',
          list: ['Confirmação da existência de tratamento', 'Acesso aos dados', 'Correção de dados incompletos', 'Exclusão dos dados', 'Revogação do consentimento'],
          note: 'Para exercer seus direitos, o usuário pode entrar em contato através do e-mail informado na seção de contato.'
        },
        {
          title: '7. Cookies',
          text: 'Este site pode utilizar cookies para:',
          list: ['Melhorar a experiência do usuário', 'Armazenar preferências (como idioma selecionado)'],
          note: 'O usuário pode desativar cookies diretamente no navegador.'
        },
        {
          title: '8. Alterações nesta Política',
          text: 'Esta Política pode ser atualizada a qualquer momento para refletir melhorias ou mudanças legais.'
        },
        {
          title: '9. Contato',
          text: 'Em caso de dúvidas sobre esta Política de Privacidade, entre em contato através do e-mail disponível na seção de contato do site.'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdate: 'Last updated: February 05, 2026',
      backHome: 'Back to Home',
      sections: [
        {
          title: '1. Introduction',
          text: 'This Privacy Policy describes how João Silva collects, uses, and protects information provided by users, clients, and recruiters when using this professional portfolio. The commitment is to ensure transparency, security, and compliance with data protection laws.'
        },
        {
          title: '2. Data Collected',
          text: 'When using the contact form on this site, the following information may be collected:',
          list: ['Name', 'Email address', 'Phone number', 'Message sent', 'Other information voluntarily provided by the user'],
          note: 'This data is provided directly by the user through the form.'
        },
        {
          title: '3. Purpose of Data Use',
          text: 'The collected data is used exclusively for:',
          list: ['Responding to messages sent via the form', 'Contacting via WhatsApp, email, or phone', 'Establishing professional communication', 'Evaluating job opportunities or business proposals'],
          note: 'No information is sold, shared, or commercialized with third parties.'
        },
        {
          title: '4. Data Sharing',
          text: 'Data may be processed by third-party services strictly necessary for communication, such as:',
          list: ['WhatsApp (Meta Platforms)', 'Website hosting services', 'Email sending services'],
          note: 'These third parties have their own privacy policies.'
        },
        {
          title: '5. Storage and Security',
          text: 'Information is handled with appropriate technical and organizational measures to protect against:',
          list: ['Unauthorized access', 'Improper alteration', 'Unauthorized disclosure', 'Data loss'],
          note: 'Data is stored only for the time necessary to fulfill the contact purpose.'
        },
        {
          title: '6. User Rights',
          text: 'Under data protection laws, the user may request:',
          list: ['Confirmation of data processing', 'Access to data', 'Correction of incomplete data', 'Deletion of data', 'Revocation of consent'],
          note: 'To exercise your rights, you can contact us through the email provided in the contact section.'
        },
        {
          title: '7. Cookies',
          text: 'This site may use cookies to:',
          list: ['Improve user experience', 'Store preferences (such as selected language)'],
          note: 'Users can disable cookies directly in their browser.'
        },
        {
          title: '8. Changes to this Policy',
          text: 'This Policy may be updated at any time to reflect improvements or legal changes.'
        },
        {
          title: '9. Contact',
          text: 'For questions about this Privacy Policy, please contact us through the email available in the contact section of the site.'
        }
      ]
    },
    es: {
      title: 'Política de Privacidad',
      lastUpdate: 'Última actualización: 05 de Febrero de 2026',
      backHome: 'Volver al Inicio',
      sections: [
        {
          title: '1. Introducción',
          text: 'Esta Política de Privacidad describe cómo João Silva recopila, utiliza y protege la información proporcionada por usuarios, clientes y reclutadores al utilizar este portafolio profesional. El compromiso es garantizar transparencia, seguridad y cumplimiento con las leyes de protección de datos.'
        },
        {
          title: '2. Datos Recopilados',
          text: 'Al utilizar el formulario de contacto de este sitio, se podrán recopilar las siguientes informaciones:',
          list: ['Nombre', 'Dirección de correo electrónico', 'Número de teléfono', 'Mensaje enviado', 'Otras informaciones proporcionadas voluntariamente por el usuario'],
          note: 'Estos datos son proporcionados directamente por el usuario a través del formulario.'
        },
        {
          title: '3. Finalidad del Uso de Datos',
          text: 'Los datos recopilados se utilizan exclusivamente para:',
          list: ['Responder mensajes enviados por el formulario', 'Contactar vía WhatsApp, correo electrónico o teléfono', 'Establecer comunicación profesional', 'Evaluación de oportunidades de trabajo o propuestas comerciales'],
          note: 'Ninguna información es vendida, compartida o comercializada con terceros.'
        },
        {
          title: '4. Compartir Datos',
          text: 'Los datos podrán ser procesados por servicios de terceros estrictamente necesarios para la comunicación, como:',
          list: ['WhatsApp (Meta Platforms)', 'Servicios de alojamiento del sitio', 'Servicios de envío de correo electrónico'],
          note: 'Estos terceros tienen sus propias políticas de privacidad.'
        },
        {
          title: '5. Almacenamiento y Seguridad',
          text: 'La información se maneja con medidas técnicas y organizativas adecuadas para proteger contra:',
          list: ['Acceso no autorizado', 'Alteración indebida', 'Divulgación no autorizada', 'Pérdida de datos'],
          note: 'Los datos se almacenan solo por el tiempo necesario para cumplir con el propósito de contacto.'
        },
        {
          title: '6. Derechos del Usuario',
          text: 'Según las leyes de protección de datos, el usuario puede solicitar:',
          list: ['Confirmación de la existencia de tratamiento', 'Acceso a los datos', 'Corrección de datos incompletos', 'Eliminación de datos', 'Revocación del consentimiento'],
          note: 'Para ejercer sus derechos, puede contactarnos a través del correo electrónico proporcionado en la sección de contacto.'
        },
        {
          title: '7. Cookies',
          text: 'Este sitio puede utilizar cookies para:',
          list: ['Mejorar la experiencia del usuario', 'Almacenar preferencias (como el idioma seleccionado)'],
          note: 'Los usuarios pueden desactivar las cookies directamente en su navegador.'
        },
        {
          title: '8. Cambios en esta Política',
          text: 'Esta Política puede actualizarse en cualquier momento para reflejar mejoras o cambios legales.'
        },
        {
          title: '9. Contacto',
          text: 'Para preguntas sobre esta Política de Privacidad, contáctenos a través del correo electrónico disponible en la sección de contacto del sitio.'
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
                <Shield className="w-8 h-8 text-primary" />
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

const PrivacyPolicy = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PrivacyPolicyContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
