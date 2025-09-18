import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, BookText, Users, Shield } from "lucide-react";

const LegalFramework = () => {
  const frameworks = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Constitución Política de Colombia",
      description: "Artículos 44 y 45 - Derechos fundamentales de niños, niñas y adolescentes",
      type: "Fundamento Constitucional",
      color: "bg-primary"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ratificaciones Internacionales",
      description: "Convención sobre los Derechos del Niño - Enfoque de derechos humanos",
      type: "Marco Internacional",
      color: "bg-secondary"
    },
    {
      icon: <BookText className="w-6 h-6" />,
      title: "Ley General de Educación (115 de 1994)",
      description: "Principios pedagógicos y formación integral en el sistema educativo",
      type: "Marco Educativo",
      color: "bg-accent"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ley 1620 de 2013 y Decreto Reglamentario",
      description: "Sistema Nacional de Convivencia Escolar - Protocolos de atención",
      type: "Marco Específico",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
              Marco Normativo Nacional
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sustento Legal de la 
              <span className="block text-primary">Justicia Restaurativa</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              La implementación de prácticas restaurativas en entornos escolares está respaldada 
              por un sólido marco normativo que garantiza su aplicación efectiva y protege los 
              derechos de todos los actores de la comunidad educativa.
            </p>
          </div>

          {/* Legal framework cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`${framework.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}>
                      {framework.icon}
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {framework.type}
                      </Badge>
                      <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                        {framework.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {framework.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key law highlight */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Ley 1620 de 2013</h3>
              </div>
              <h4 className="text-xl font-semibold text-foreground">
                "Sistema Nacional de Convivencia Escolar y Formación para el Ejercicio de los Derechos Humanos"
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esta ley establece el marco legal específico para la aplicación de la justicia restaurativa 
                en entornos escolares, definiendo protocolos claros para la atención de situaciones 
                <strong className="text-primary"> Tipo I</strong>, <strong className="text-secondary">Tipo II</strong> y 
                <strong className="text-accent"> Tipo III</strong>, garantizando un abordaje integral 
                y respetuoso de los derechos de todos los involucrados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalFramework;