import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  BookOpen,
  Users,
  Scale,
  ArrowRight,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-primary/5 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Left column - Main CTA and Contact methods */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Transforma tu Comunidad Educativa
                  <span className="block text-primary">con Justicia Restaurativa</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Estoy lista para acompañarte en la implementación de procesos restaurativos que fortalezcan la convivencia y promuevan una cultura de paz en tu institución educativa. 
                </p>
              </div>

              {/* Contact methods */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
                <Card className="border-0 bg-primary/5 hover:bg-primary/10 transition-colors group">
                  <CardContent className="p-3 md:p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary p-2 rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Consultoría por Email</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          Agenda una sesión de consultoría personalizada
                        </p>
                        <Button variant="soft" size="sm" className="group/btn text-xs w-full">
                          <span className="truncate">marialejandra.vap@gmail.com</span>
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform ml-1 flex-shrink-0" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-secondary/5 hover:bg-secondary/10 transition-colors group">
                  <CardContent className="p-3 md:p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary p-2 rounded-lg text-secondary-foreground group-hover:scale-110 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Llamada Directa</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          Conversemos sobre las necesidades de tu institución
                        </p>
                        <Button variant="soft" size="sm" className="group/btn text-xs w-full">
                          <span>+57 3016600525</span>
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform ml-1 flex-shrink-0" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Newsletter signup */}
              <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
                <CardContent className="p-3 md:p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent p-2 rounded-lg text-accent-foreground">
                      <Send className="w-4 h-4" />
                    </div>
                    <div className="flex-1 w-full">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">
                        Mantente Actualizado
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        Recibe las últimas novedades sobre justicia restaurativa, talleres y recursos educativos
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input 
                          type="email" 
                          placeholder="tu@email.com" 
                          className="flex-1 px-3 py-2 text-sm rounded-md border border-input bg-background min-w-0"
                        />
                        <Button variant="accent" size="sm" className="w-full sm:w-auto">Suscribirse</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Services and Training Components */}
            <div className="space-y-6">
              {/* Service areas */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  Áreas de Servicio
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <BookOpen className="w-3 h-3 text-primary" />
                    </div>
                    <span>Consultoría especializada en formación docente frente a estrategias pedagógicas para atención de situaciones I en entorno escolar.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="bg-secondary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-secondary" />
                    </div>
                    <span>Consultoría especializada para abordaje desde Comités de convivencia escolar en atención de casos en situaciones tipo II y III.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="bg-accent/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <Scale className="w-3 h-3 text-accent" />
                    </div>
                    <span>Jornadas de formación y talleres con estudiantes</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <MapPin className="w-3 h-3 text-primary" />
                    </div>
                    <span>Atenciones individuales con familias</span>
                  </div>
                </div>
              </div>

              {/* Training components */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Componentes de Formación y Capacitación
                </h3>
                <div className="space-y-3">
                  <div className="group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                    <div className="flex items-start gap-2">
                      <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                        <BookOpen className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1 text-sm">Trabajo con Docentes</h4>
                        <p className="text-xs text-muted-foreground text-justify leading-relaxed">
                          Los docentes participan en talleres y formaciones de Justicia Restaurativa, atención de casos desde el modelo sistémico y técnicas de resolución de conflictos, buscando el desarrollo de habilidades en el uso de herramientas como la representación de conflictos, el trabajo con lo imaginativo y las frases simbólicas.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group hover:bg-secondary/5 p-3 rounded-lg transition-colors">
                    <div className="flex items-start gap-2">
                      <div className="bg-secondary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                        <Users className="w-3 h-3 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1 text-sm">Trabajo con los Padres</h4>
                        <p className="text-xs text-muted-foreground text-justify leading-relaxed">
                          Se fomenta la colaboración con las familias, promoviendo el respeto mutuo y la comunicación abierta. Los padres son vistos como aliados en el proceso educativo. Rituales y Gestos Simbólicos: Se utilizan gestos como la reverencia o frases simbólicas para fomentar el respeto y la reconciliación entre los alumnos y sus familias.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group hover:bg-accent/5 p-3 rounded-lg transition-colors">
                    <div className="flex items-start gap-2">
                      <div className="bg-accent/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                        <Heart className="w-3 h-3 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1 text-sm">Trabajo en el Aula</h4>
                        <p className="text-xs text-muted-foreground text-justify leading-relaxed">
                          Creación de un Ambiente Seguro: Se busca que el aula sea un espacio donde los alumnos se sientan aceptados y respetados, independientemente de sus circunstancias familiares.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                    <div className="flex items-start gap-2">
                      <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                        <Scale className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1 text-sm">Asistencias en Atención a Casos</h4>
                        <p className="text-xs text-muted-foreground text-justify leading-relaxed">
                          Acompañamiento especializado para la resolución de situaciones específicas que requieren intervención directa y personalizada.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-foreground">Justicia Restaurativa</span>
              </div>
              
              <div className="text-sm text-muted-foreground text-center">
                <p>
                  © 2024 Justicia Restaurativa en Entornos Escolares. 
                  <span className="block md:inline md:ml-2">
                    Construyendo comunidades educativas más justas y empáticas.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/5 rounded-full translate-x-20 translate-y-20"></div>
    </footer>
  );
};

export default Footer;