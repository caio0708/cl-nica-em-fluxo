import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_NUMBER = "5511999999999";

const SchedulingSection = () => {
  useEffect(() => {
    const C = window as any;
    const A = "https://app.cal.com/embed/embed.js";
    const L = "init";

    const p = function (a: any, ar: any) { a.q.push(ar); };
    const d = C.document;

    C.Cal = C.Cal || function () {
      const cal = C.Cal;
      const ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); } as any;
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };

    C.Cal("init", "reuniao-30-min", { origin: "https://app.cal.com" });

    C.Cal.ns["reuniao-30-min"]("inline", {
      elementOrSelector: "#my-cal-inline-reuniao-30-min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "caio-terencio-yjozs1/reuniao-30-min",
    });

    C.Cal.ns["reuniao-30-min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

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
          className="max-w-5xl mx-auto bg-card rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            id="my-cal-inline-reuniao-30-min"
            style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: "500px" }}
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
