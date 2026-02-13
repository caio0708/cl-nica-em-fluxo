import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CAL_COM_URL = "https://cal.com/seu-usuario/consultoria";
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
          {/* Cal.com Embed Placeholder */}
          <div className="w-full min-h-[500px] flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <p className="text-xl font-display font-bold text-foreground mb-2">Widget Cal.com</p>
            <p className="text-muted-foreground mb-4 max-w-md">
              Substitua este placeholder pelo embed do seu Cal.com. 
              Basta trocar a URL no componente <code className="bg-secondary px-2 py-0.5 rounded text-sm">SchedulingSection.tsx</code>
            </p>
            <a
              href={CAL_COM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
            >
              Agendar Agora
            </a>
          </div>
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
