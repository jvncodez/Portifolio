import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const projectsData = [
  {
    id: 1,
    title: 'Hortec',
    category: { pt: 'Sistema Automatizado Educacional', en: 'Automated Educational System', es: 'Sistema Educativo Automatizado' },
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    goal: { pt: 'Modernizar o aprendizado técnico com IOT e monitoramento em tempo real.', en: 'Modernize technical learning with IoT and real-time monitoring.', es: 'Modernizar el aprendizaje técnico con IoT y monitoreo en tiempo real.' },
    solution: { pt: 'Arquitetura baseada em microserviços e sensores integrados via MQTT.', en: 'Microservices architecture with sensors integrated via MQTT.', es: 'Arquitectura de microservicios con sensores integrados vía MQTT.' },
    stack: ['Python', 'Arduino', 'React', 'Node.js'],
  },
  {
    id: 2,
    title: 'SayMed',
    category: { pt: 'Gestão Odontológica', en: 'Dental Management', es: 'Gestión Odontológica' },
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    goal: { pt: 'Simplificar a agenda e prontuários de clínicas odontológicas.', en: 'Simplify scheduling and records for dental clinics.', es: 'Simplificar agenda y expedientes de clínicas dentales.' },
    solution: { pt: 'Plataforma SaaS com criptografia de ponta a ponta para dados sensíveis.', en: 'SaaS platform with end-to-end encryption for sensitive data.', es: 'Plataforma SaaS con cifrado de extremo a extremo para datos sensibles.' },
    stack: ['TypeScript', 'Supabase', 'Next.js', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'VenttureHearth',
    category: { pt: 'Startup SaaS Accelerator', en: 'Startup SaaS Accelerator', es: 'Aceleradora de Startups SaaS' },
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    goal: { pt: 'Escalar produtos digitais com infraestrutura de alta performance.', en: 'Scale digital products with high-performance infrastructure.', es: 'Escalar productos digitales con infraestructura de alto rendimiento.' },
    solution: { pt: 'Implementação de CI/CD robusto e automação de processos via n8n.', en: 'Robust CI/CD implementation and process automation via n8n.', es: 'Implementación de CI/CD robusto y automatización de procesos vía n8n.' },
    stack: ['AWS', 'Docker', 'n8n', 'Python'],
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
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-border/50"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-primary font-medium mb-2">
                  {project.category[lang]}
                </p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{t.projects.viewDetails}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="space-y-2">
                  <p className="text-sm text-primary font-medium">
                    {selectedProject.category[lang]}
                  </p>
                  <DialogTitle className="text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Goal */}
                <div>
                  <h4 className="font-semibold mb-2">{t.projects.modal.goal}</h4>
                  <p className="text-muted-foreground">
                    {selectedProject.goal[lang]}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold mb-2">{t.projects.modal.solution}</h4>
                  <p className="text-muted-foreground">
                    {selectedProject.solution[lang]}
                  </p>
                </div>

                {/* Stack */}
                <div>
                  <h4 className="font-semibold mb-2">{t.projects.modal.stack}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
