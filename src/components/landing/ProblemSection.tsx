import { motion } from "framer-motion";
import { CalendarX, Clock, Flame } from "lucide-react";

const problems = [
  {
    icon: CalendarX,
    title: "Agenda com Buracos",
    description: "A recepção esqueceu de confirmar e o horário ficou vago. Equipamentos parados, receita perdida.",
  },
  {
    icon: Clock,
    title: "Equipamentos Ociosos",
    description: "Equipamentos de ponta parados enquanto o paciente espera burocracia, guias e autorizações.",
  },
  {
    icon: Flame,
    title: "Gestor Apagando Incêndios",
    description: "Você, que deveria pensar estrategicamente, perde o dia resolvendo problemas operacionais repetitivos.",
  },
];

const ProblemSection = () => {
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
            Você sente que sua clínica vive em um{" "}
            <span className="text-accent">caos silencioso?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Provavelmente você tem equipamentos de ponta e uma equipe esforçada. Mas, ao final do mês, a conta não fecha como deveria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <problem.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-lg text-muted-foreground mt-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Isso não é culpa da sua equipe. <strong className="text-foreground">É culpa do modelo tradicional de gestão.</strong>
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
