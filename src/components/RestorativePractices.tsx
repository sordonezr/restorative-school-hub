import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileCheck, 
  MessageSquare, 
  Clock, 
  Users, 
  Heart, 
  Target,
  Lightbulb,
  CheckCircle2
} from "lucide-react";

const RestorativePractices = () => {
  const formalPractices = [
    "Proceso previo de atención individual con las partes",
    "Abordaje de la responsabilización y voluntad de reparar",
    "Identificación de demandas de reparación específicas", 
    "Selección del tipo de práctica restaurativa según el caso",
    "Preparación formal para el encuentro restaurativo",
    "Seguimiento y evaluación desde el comité de convivencia",
    "Cierre formal del proceso"
  ];

  const informalBenefits = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Creación de Ambiente Seguro",
      description: "El aula se convierte en un espacio donde los estudiantes se sienten aceptados y respetados"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Trabajo en Grupo",
      description: "Se fomenta la cooperación y el respeto mutuo, fortaleciendo el sentido de comunidad"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Atención a las Emociones",
      description: "Ayudamos a identificar y expresar sentimientos de manera adecuada y constructiva"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Enfoque en Soluciones",
      description: "Identificamos excepciones y momentos de comportamientos positivos para replicarlos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
              Metodología Restaurativa
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Prácticas Restaurativas
              <span className="block text-primary">Formales e Informales</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ofrecemos un amplio repertorio de herramientas restaurativas que se adaptan 
              a diferentes contextos y necesidades de la comunidad educativa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formal Practices */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-xl text-primary-foreground">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-primary mb-1">
                      Prácticas Formales
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      Proceso Estructurado
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Procesos estructurados que requieren preparación previa y seguimiento formal. 
                  <strong className="text-primary"> No constituyen un fin en sí mismos</strong>, sino el 
                  medio para materializar acuerdos restaurativos.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Proceso Paso a Paso:
                </h4>
                <div className="space-y-3">
                  {formalPractices.map((practice, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-foreground leading-relaxed">
                        {practice}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-foreground font-medium">
                    <strong className="text-accent">Resultado:</strong> Acuerdos formales con seguimiento 
                    del Comité de Convivencia Escolar, evaluación periódica y cierre documentado.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Informal Practices */}
            <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-background hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary p-3 rounded-xl text-secondary-foreground">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-secondary mb-1">
                      Prácticas Informales
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      Aplicación Inmediata
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Herramientas flexibles que se pueden aplicar en cualquier momento dentro del aula, 
                  <strong className="text-secondary"> sin proceso previo</strong>, para abordar situaciones 
                  grupales y mejorar el clima convivencial.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <h4 className="font-semibold text-secondary mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Beneficios Inmediatos:
                </h4>
                
                <div className="space-y-4">
                  {informalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/15 transition-colors">
                      <div className="bg-secondary text-secondary-foreground p-2 rounded-lg flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{benefit.title}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-foreground font-medium">
                    <strong className="text-accent">Aplicación:</strong> Círculos de diálogo, técnicas de 
                    comunicación no violenta, representación simbólica de conflictos y dinámicas de construcción de paz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Principios Fundamentales del para abordar los procesos
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              
              Visión Sistémica: Los alumnos no son vistos como individuos aislados, sino como parte de un sistema familiar y social.  Esto implica que sus comportamientos y actitudes están influenciados por su entorno familiar y las dinámicas que allí se desarrollan. 

Respeto por el Origen Familiar: Se reconoce y respeta el destino y las circunstancias familiares de cada alumno, evitando juicios o intentos de "mejorar" su situación familiar.

Conciencia Intermedia: Se trabaja con la idea de que los niños perciben, de manera inconsciente, las dinámicas y emociones de su entorno, lo que influye en su comportamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestorativePractices;