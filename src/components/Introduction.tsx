import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Users2 } from "lucide-react";

const Introduction = () => {
  return (
    <section id="intro" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Section title */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ¿Qué es la Justicia Restaurativa?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un enfoque transformador que convierte los conflictos escolares en oportunidades 
              de aprendizaje, crecimiento y fortalecimiento de la comunidad educativa.
            </p>
          </div>

          {/* Core principles cards */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg border-0 bg-primary-soft/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Responsabilización</h3>
                <p className="text-muted-foreground">
                  Mediante un proceso de atención de caso lograr el reconocimiento del daño causado.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg border-0 bg-secondary-soft/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Reparación</h3>
                <p className="text-muted-foreground">
                  Lograr que mediante procesos de atención las personas afectadas por el conflicto puedan establecer las necesidades de reparación integral.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg border-0 bg-accent-soft/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-accent">Restablecimiento</h3>
                <p className="text-muted-foreground">
                  Establecer a través de un proceso individual previo, unos acuerdos restaurativos que permitirán el restablecimiento de los vínculos afectados y propenderán por garantizar la no repetición de los daños causados.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission statement */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mt-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Nuestro Objetivo
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acompañar a las instituciones educativas y en general a los diferentes actores que abordan la convivencia escolar en la implementación de unas estrategias de atención desde el enfoque sistémico, de prevención y atención de casos, basado en los principios de la justicia restaurativa, promoviendo la corresponsabilidad, el interés superior del niño, niña y adolescente, y la creación de entornos protectores que prevengan el escalamiento de conflictos y la reincidencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
