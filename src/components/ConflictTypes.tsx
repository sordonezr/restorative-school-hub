import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, AlertTriangle, ShieldAlert, Users, MessageCircle, Scale } from "lucide-react";

const ConflictTypes = () => {
  const conflictTypes = [
    {
      type: "Situaciones Tipo I",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
      description: "Conflictos manejados en el aula que corresponden a este tipo de situaciones",
      strategies: [
        "Estrategias de abordaje pedagógico grupal",
        "Círculo restaurativo rápido en clase",
        "Mediación víctima-ofensor cuando sea necesario",
        "Prevención de estigmatización y revictimización"
      ],
      approach: "Preventivo y Pedagógico",
      examples: "Conflictos menores, malentendidos, interrupciones del proceso educativo"
    },
    {
      type: "Situaciones Tipo II",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      description: "Situaciones que afectan la convivencia escolar y requieren atención especializada",
      strategies: [
        "Activación de ruta por Comité Escolar (Ley 1620)",
        "Presentación de protocolo de Justicia Restaurativa",
        "Firma de consentimiento informado",
        "Sesiones individuales preparatorias",
        "Práctica restaurativa formal",
        "Seguimiento y evaluación de compromisos"
      ],
      approach: "Restaurativo Formal",
      examples: "Agresión física/verbal, ciberbullying, discriminación"
    },
    {
      type: "Situaciones Tipo III",
      icon: <ShieldAlert className="w-6 h-6" />,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/30",
      description: "Situaciones que constituyen delitos o faltas disciplinarias graves",
      strategies: [
        "Activación inmediata de ruta Ley 1620",
        "Evaluación si es objeto de atención institucional",
        "Identificación de delitos querellables susceptibles de conciliación",
        "Protocolo completo de Justicia Restaurativa",
        "Coordinación con autoridades competentes",
        "Seguimiento integral y cierre formal"
      ],
      approach: "Restaurativo Especializado",
      examples: "Delitos, violencia grave, abuso sexual, tráfico de sustancias"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="text-sm font-medium px-4 py-2">
              Protocolo de Atención - Ley 1620 de 2013
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tipos de Conflictos y
              <span className="block text-primary">Estrategias de Abordaje</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cada situación requiere un abordaje específico según su naturaleza y gravedad, 
              siempre priorizando la restauración y el aprendizaje por encima del castigo.
            </p>
          </div>

          {/* Conflict types grid */}
          <div className="space-y-8">
            {conflictTypes.map((conflict, index) => (
              <Card 
                key={index}
                className={`group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border-2 ${conflict.borderColor} bg-card`}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-4">
                    <div className={`${conflict.bgColor} p-4 rounded-xl ${conflict.color} group-hover:scale-110 transition-transform`}>
                      {conflict.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className={`text-2xl font-bold ${conflict.color}`}>
                          {conflict.type}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {conflict.approach}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {conflict.description}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2 italic">
                        <strong>Ejemplos:</strong> {conflict.examples}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <h4 className={`font-semibold ${conflict.color} flex items-center gap-2`}>
                      <MessageCircle className="w-4 h-4" />
                      Estrategias de Intervención:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {conflict.strategies.map((strategy, strategyIndex) => (
                        <div 
                          key={strategyIndex}
                          className={`flex items-start gap-3 p-3 rounded-lg ${conflict.bgColor}`}
                        >
                          <div className={`w-2 h-2 rounded-full ${conflict.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-foreground font-medium">
                            {strategy}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key principle highlight */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Scale className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Principio Fundamental</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En todos los casos, el abordaje desde la justicia restaurativa busca 
                <strong className="text-primary"> evitar la estigmatización y revictimización</strong> de las 
                partes involucradas, promoviendo procesos que generen aprendizaje, sanación y 
                fortalecimiento de la comunidad educativa. <strong className="text-secondary">Ningún proceso 
                restaurativo constituye un fin en sí mismo</strong>, sino que es el medio para materializar 
                acuerdos que requieren seguimiento, evaluación y cierre formal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConflictTypes;