import { motion } from "framer-motion";
import { ArrowRight, UserCheck, Stethoscope } from "lucide-react";

const events = [
  {
    event: "Paciente chegou",
    icon: UserCheck,
    action: "Recepção notificada e Sala de Exame preparada automaticamente",
    color: "bg-primary/10 text-primary",
  },
  {
    event: "Exame realizado",
    icon: Stethoscope,
    action: "Médico acionado para laudo e Faturamento iniciado automaticamente",
    color: "bg-accent/10 text-accent",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chega de Tentar Resolver Problemas de Processo com{" "}
            <span className="text-accent">Mais Pessoas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nós implementamos uma <strong className="text-foreground">Orquestração Operacional Baseada em Eventos</strong>. Não é mágica, não é um "robô de chat". É engenharia de processos.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {events.map((item, index) => (
            <motion.div
              key={item.event}
              className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 md:w-2/5">
                  <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Evento</span>
                    <p className="font-display font-bold text-foreground text-lg">{item.event}</p>
                  </div>
                </div>

                <ArrowRight className="hidden md:block w-6 h-6 text-accent shrink-0" />

                <div className="md:w-3/5 pl-15 md:pl-0">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Ação Automática</span>
                  <p className="text-foreground font-medium">{item.action}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-lg font-bold text-foreground mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Tudo automático. Tudo monitorado. Sem depender da sorte.
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;
