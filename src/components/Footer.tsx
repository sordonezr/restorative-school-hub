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
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            
            {/* Contact and CTA */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                  Contacto y Consultoría
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Transforma tu Comunidad Educativa
                  <span className="block text-primary">con Justicia Restaurativa</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Nuestro equipo especializado está listo para acompañarte en la implementación 
                  de prácticas restaurativas que fortalezcan la convivencia y promuevan una 
                  cultura de paz en tu institución educativa.
                </p>
              </div>

              {/* Contact methods */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 bg-primary/5 hover:bg-primary/10 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary p-3 rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Consultoría por Email</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Agenda una sesión de consultoría personalizada
                        </p>
                        <Button variant="soft" size="sm" className="group/btn">
                          <span>consultoria@justicia-restaurativa.edu.co</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-secondary/5 hover:bg-secondary/10 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary p-3 rounded-lg text-secondary-foreground group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Llamada Directa</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Conversemos sobre las necesidades de tu institución
                        </p>
                        <Button variant="soft" size="sm" className="group/btn">
                          <span>+57 (1) 234-5678</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Newsletter signup */}
              <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent p-3 rounded-lg text-accent-foreground">
                      <Send className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        Mantente Actualizado
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Recibe las últimas novedades sobre justicia restaurativa, talleres y recursos educativos
                      </p>
                      <div className="flex gap-2">
                        <input 
                          type="email" 
                          placeholder="tu@email.com" 
                          className="flex-1 px-3 py-2 text-sm rounded-md border border-input bg-background"
                        />
                        <Button variant="accent" size="sm">Suscribirse</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service areas and quick links */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Áreas de Servicio
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>Consultoría especializada en formación docente frente a estrategias pedagógicas para atención de situaciones I en entorno escolar.
</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-secondary" />
                    <span>Consultoría especializada para abordaje desde Comités de convivencia escolar en atención de casos en situaciones tipo II y III.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Scale className="w-4 h-4 text-accent" />
                    <span>Jornadas de formación y talleres con estudiantes</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Atenciones individuales con familias</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Componentes de Formación y Capacitación
                </h3>
                <div className="space-y-3">
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Trabajo con docentes: Los docentes participan en talleres y formaciones de Justicia Restaurativa, atención de casos desde el modelo sistémico y técnicas de resolución de conflictos, buscando el desarrollo de habilidades en el uso de herramientas como la representación de conflictos, el trabajo con lo imaginativo y las frases simbólicas.
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Trabajo con los Padres: Se fomenta la colaboración con las familias, promoviendo el respeto mutuo y la comunicación abierta.  Los padres son vistos como aliados en el proceso educativo. Rituales y Gestos Simbólicos: Se utilizan gestos como la reverencia o frases simbólicas para fomentar el respeto y la reconciliación entre los alumnos y sus familias.
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Trabajo en el aula: Creación de un Ambiente Seguro: Se busca que el aula sea un espacio donde los alumnos se sientan aceptados y respetados, independientemente de sus circunstancias familiares.
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Asistencias en atención a casos
                  </a>
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