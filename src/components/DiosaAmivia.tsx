import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Lightbulb, 
  Eye,
  Shield,
  Link,
  Sprout,
  CircleDot
} from "lucide-react";

const DiosaAmivia = () => {
  const attributes = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Guardiana de la palabra",
      description: "Protege el derecho de todos a ser escuchados sin juicio"
    },
    {
      icon: <Link className="w-5 h-5" />,
      title: "Tejedora de vínculos", 
      description: "Ayuda a reconstruir relaciones cuando se rompen por el conflicto"
    },
    {
      icon: <Sprout className="w-5 h-5" />,
      title: "Sembradora de paz activa",
      description: "Enseña que el conflicto no se evita ni se castiga, sino que se transforma"
    },
    {
      icon: <CircleDot className="w-5 h-5" />,
      title: "Guía de círculos restaurativos",
      description: "Está presente simbólicamente en cada encuentro donde se busca reparar y reintegrar"
    }
  ];

  const symbolColors = [
    {
      color: "Verde",
      meaning: "esperanza y aprendizaje",
      bgClass: "bg-emerald-500"
    },
    {
      color: "Azul", 
      meaning: "confianza y comunicación",
      bgClass: "bg-blue-500"
    },
    {
      color: "Dorado",
      meaning: "dignidad y reparación", 
      bgClass: "bg-amber-500"
    }
  ];

  const appearance = [
    "Rostro sereno, siempre con una sonrisa suave, transmitiendo acogida",
    "Lleva un manto con plumas y hojas entrelazadas, símbolo de suavidad y fortaleza",
    "En una mano sostiene una balanza viva (hecha de ramas y flores, no de metal rígido), que recuerda que el equilibrio se logra dialogando y reparando",
    "En la otra, una lámpara encendida, que ilumina caminos de reconciliación en la comunidad escolar"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
              Inspiración Simbólica
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Diosa Amivía
              <span className="block text-primary text-2xl md:text-3xl mt-2 font-normal">
                Guardiana de la Justicia Restaurativa
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Mito */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  Mito
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Se cuenta que Amivía nació de las lágrimas de dos estudiantes en conflicto. 
                  Sus lágrimas cayeron sobre la tierra y, en lugar de dividirse, se unieron formando un riachuelo. 
                  De allí emergió esta diosa, que prometió acompañar a toda comunidad educativa que busque 
                  <strong className="text-primary"> transformar el dolor en aprendizaje</strong> y 
                  <strong className="text-primary"> los errores en oportunidades de crecer juntos</strong>.
                </p>
              </CardContent>
            </Card>

            {/* Símbolo */}
            <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-background">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary flex items-center gap-3">
                  <CircleDot className="w-6 h-6" />
                  Símbolo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Un círculo tejido con tres hilos de colores representando los espacios restaurativos 
                  donde todas las voces tienen lugar y el vínculo se reconstruye:
                </p>
                <div className="space-y-3">
                  {symbolColors.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                      <div className={`w-4 h-4 rounded-full ${item.bgClass}`}></div>
                      <div>
                        <span className="font-semibold text-secondary">{item.color}:</span>
                        <span className="text-muted-foreground ml-2">{item.meaning}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Atributos */}
          <Card className="mb-12 border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-accent flex items-center gap-3">
                <Users className="w-6 h-6" />
                Atributos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {attributes.map((attribute, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-accent/10 rounded-lg hover:bg-accent/15 transition-colors">
                    <div className="bg-accent text-accent-foreground p-2 rounded-lg flex-shrink-0">
                      {attribute.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{attribute.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {attribute.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Apariencia */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                <Eye className="w-6 h-6" />
                Apariencia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appearance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiosaAmivia;