import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import venttureImg from '@/assets/ventture-logo.png';
import { personalData } from '@/data/personal.loader';

const projectsData = [
  {
    id: 1,
    title: 'Hortec',
    category: { pt: 'Sistema Automatizado de Horta Escolar', en: 'Automated School Garden System', es: 'Sistema Automatizado de Huerto Escolar' },
    image: personalData.projectImages.hortec,
    goal: { 
      pt: 'Reduzir a ausência de alunos responsáveis pela manutenção das hortas escolares, automatizando o sistema de rega e ornamentação.', 
      en: 'Reduce absences of students responsible for maintaining school gardens by automating the watering and ornamentation system.', 
      es: 'Reducir la ausencia de alumnos responsables del mantenimiento de los huertos escolares, automatizando el sistema de riego y ornamentación.' 
    },
    solution: { 
      pt: 'Sistema automatizado desenvolvido com Arduino Uno e C++, integrando hardware e software para criar uma horta inteligente. Projeto premiado na escola técnica.', 
      en: 'Automated system developed with Arduino Uno and C++, integrating hardware and software to create a smart garden. Award-winning project at the technical school.', 
      es: 'Sistema automatizado desarrollado con Arduino Uno y C++, integrando hardware y software para crear un huerto inteligente. Proyecto premiado en la escuela técnica.' 
    },
    stack: ['C++', 'Arduino Uno', 'Hardware Integration', 'IoT'],
  },
  {
    id: 2,
    title: 'SayMed',
    category: { pt: 'Gestão para Clínicas Odontológicas', en: 'Dental Clinic Management', es: 'Gestión de Clínicas Odontológicas' },
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    goal: { 
      pt: 'Desenvolver um sistema completo de gestão para clínicas odontológicas com arquitetura robusta e integrações modernas.', 
      en: 'Develop a complete management system for dental clinics with robust architecture and modern integrations.', 
      es: 'Desarrollar un sistema completo de gestión para clínicas odontológicas con arquitectura robusta e integraciones modernas.' 
    },
    solution: { 
      pt: 'Sistema estruturado com Clean Code e VibeCode. Responsável pela criação do banco de dados, comunicação entre APIs internas, integração com n8n e Supabase via Edge Functions, além da arquitetura backend completa.', 
      en: 'System structured with Clean Code and VibeCode. Responsible for database creation, internal API communication, n8n and Supabase integration via Edge Functions, plus complete backend architecture.', 
      es: 'Sistema estructurado con Clean Code y VibeCode. Responsable de la creación de base de datos, comunicación entre APIs internas, integración con n8n y Supabase vía Edge Functions, además de la arquitectura backend completa.' 
    },
    stack: ['TypeScript', 'Supabase', 'Edge Functions', 'n8n', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'VenttureHealth',
    category: { pt: 'Startup de Soluções Médicas', en: 'Healthcare Solutions Startup', es: 'Startup de Soluciones Médicas' },
    image: venttureImg,
    goal: { 
      pt: 'Desenvolver soluções digitais inovadoras para a área da medicina, focando em automações e arquitetura escalável.', 
      en: 'Develop innovative digital solutions for the medical field, focusing on automation and scalable architecture.', 
      es: 'Desarrollar soluciones digitales innovadoras para el área médica, enfocándose en automatizaciones y arquitectura escalable.' 
    },
    solution: { 
      pt: 'Desenvolvimento de automações, arquitetura backend e operação. Atuo na parte de coordenação de projetos e soluções digitais ao lado de Arthur Muniz.', 
      en: 'Development of automations, backend architecture and operations. I work on project coordination and digital solutions alongside Arthur Muniz.', 
      es: 'Desarrollo de automatizaciones, arquitectura backend y operación. Actúo en la coordinación de proyectos y soluciones digitales junto a Arthur Muniz.' 
    },
    stack: ['Backend Architecture', 'Automation', 'n8n', 'DevOps'],
    link: 'https://www.instagram.com/arthurmuniz.ia/',
  },
  {
    id: 4,
    title: 'CyberSec Labs',
    category: { pt: 'Vitrine de Segurança', en: 'Security Showcase', es: 'Vitrina de Seguridad' },
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    goal: { pt: 'Demonstrar vulnerabilidades comuns e como mitigá-las.', en: 'Demonstrate common vulnerabilities and how to mitigate them.', es: 'Demostrar vulnerabilidades comunes y cómo mitigarlas.' },
    solution: { pt: 'Ambiente controlado de scan de chaves e rotas (Pentesting Simulator).', en: 'Controlled environment for key and route scanning (Pentesting Simulator).', es: 'Ambiente controlado de escaneo de claves y rutas (Simulador de Pentesting).' },
    stack: ['Go', 'Rust', 'Linux Architecture', 'API Security'],
  },
];

const Projects = () => {
  const { lang, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.projects.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer glass-border glow-hover"
            >
              {/* Image */}
              {project.id === 3 ? (
                <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-3/5 h-3/5 object-contain"
                  />
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent backdrop-blur-[2px]" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass-strong glass-border rounded-xl p-4">
                  <p className="text-sm text-primary font-medium mb-1">
                    {project.category[lang]}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{t.projects.viewDetails}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl border-0 p-0 overflow-hidden bg-transparent shadow-none [&>button]:text-foreground [&>button]:z-20">
          {selectedProject && (
            <div className="relative rounded-2xl overflow-hidden" style={{
              background: 'hsl(var(--card) / 0.7)',
              backdropFilter: 'blur(40px) saturate(1.5)',
              border: '1px solid hsl(0 0% 100% / 0.12)',
              boxShadow: '0 25px 60px -12px rgba(0,0,0,0.4), inset 0 1px 0 0 hsl(0 0% 100% / 0.1)',
            }}>
              {/* Header image with gradient fade */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 z-10">
                  <p className="text-sm text-primary font-medium mb-1">
                    {selectedProject.category[lang]}
                  </p>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground drop-shadow-lg">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="rounded-xl p-4 transition-all duration-300 hover:border-primary/30" style={{
                  background: 'hsl(var(--card) / 0.5)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid hsl(0 0% 100% / 0.08)',
                }}>
                  <h4 className="font-semibold mb-2 text-foreground">{t.projects.modal.goal}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedProject.goal[lang]}
                  </p>
                </div>

                <div className="rounded-xl p-4 transition-all duration-300 hover:border-primary/30" style={{
                  background: 'hsl(var(--card) / 0.5)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid hsl(0 0% 100% / 0.08)',
                }}>
                  <h4 className="font-semibold mb-2 text-foreground">{t.projects.modal.solution}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedProject.solution[lang]}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">{t.projects.modal.stack}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <Badge key={tech} className="rounded-lg px-3 py-1 text-xs font-medium text-primary border-primary/20" style={{
                        background: 'hsl(var(--primary) / 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid hsl(var(--primary) / 0.25)',
                      }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
