import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CAL_COM_URL = "https://cal.com/caio-terencio-yjozs1/reuniao-30-min";
const WHATSAPP_NUMBER = "5511999999999";

const SchedulingSection = () => {
  return (
    <section id="agendamento" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Escolha o Melhor Horário para{" "}
            <span className="text-accent">Blindar a Operação</span> da Sua Clínica
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-card rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src={`${CAL_COM_URL}?embed=true&theme=light`}
            className="w-full border-0"
            style={{ minHeight: "650px" }}
            title="Agendar consultoria gratuita"
            allow="payment"
          />
        </motion.div>

        <motion.p
          className="text-center text-primary-foreground/70 mt-8 max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>Minha agenda é pessoal e limitada.</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            Fale no WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default SchedulingSection;
