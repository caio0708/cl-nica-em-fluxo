import { motion } from "framer-motion";
import { CheckCircle, CalendarCheck, MessageCircle } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_NUMBER = "5511948040856";

const Obrigado = () => {
  useEffect(() => {
    // Fire Facebook Pixel Lead event on thank you page
    if (typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Schedule");
    }
  }, []);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <motion.div
        className="max-w-xl w-full text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-8"
        >
          <CheckCircle className="w-10 h-10 text-green-600" />
        </motion.div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Reunião Confirmada!
        </h1>

        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Parabéns por dar o primeiro passo para blindar a operação da sua clínica.
          Você receberá um e-mail de confirmação com todos os detalhes.
        </p>

        <div className="bg-card border border-border rounded-2xl p-8 mb-10 text-left space-y-5">
          <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-primary" />
            Prepare-se para a reunião
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">1.</span>
              <span>Anote os <strong className="text-foreground">3 maiores gargalos</strong> que você enfrenta hoje na operação.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">2.</span>
              <span>Tenha em mente quantos <strong className="text-foreground">exames por dia</strong> sua clínica realiza em média.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-0.5">3.</span>
              <span>Pense em quais <strong className="text-foreground">softwares e ferramentas</strong> você já utiliza hoje.</span>
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground mb-6">
          Alguma dúvida antes da reunião? Fale comigo:
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20acabei%20de%20agendar%20uma%20reuni%C3%A3o%20e%20tenho%20uma%20d%C3%BAvida.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </a>
      </motion.div>
    </main>
  );
};

export default Obrigado;
