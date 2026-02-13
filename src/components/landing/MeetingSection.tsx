import { motion } from "framer-motion";
import { Search, PenTool, Monitor, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Diagnosticar", description: "Onde estão os 'vazamentos de dinheiro' na sua operação atual." },
  { icon: PenTool, number: "02", title: "Desenhar", description: "Como seria o fluxo Event-Driven personalizado para sua realidade." },
  { icon: Monitor, number: "03", title: "Demonstrar", description: "Na prática, o Painel de Controle que devolve sua paz de espírito." },
];

const audience = [
  "Donos e Gestores de Clínicas de Radiologia que já faturam, mas querem mais eficiência.",
  "Quem está cansado de ferramentas desconectadas e planilhas manuais.",
  "Quem busca previsibilidade e controle real da operação.",
];

const MeetingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Vai Acontecer Nesta Reunião?
          </h2>
          <p className="text-muted-foreground text-lg">
            Nesta consultoria gratuita de 30 minutos, eu não vou apenas te apresentar um software. Nós vamos:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-9 h-9 text-primary-foreground" />
              </div>
              <span className="text-sm font-bold text-accent tracking-wider">{step.number}</span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-1 mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-secondary rounded-2xl p-8 md:p-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-5">Para quem é esta reunião?</h3>
          <ul className="space-y-4">
            {audience.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetingSection;
