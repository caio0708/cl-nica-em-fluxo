import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent text-accent-foreground mb-6">
                Consultoria Gratuita • 30 minutos
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Sua Clínica de Radiologia Fatura Bem, Mas a Margem{" "}
              <span className="text-accent">Desaparece?</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Descubra como eliminar gargalos operacionais invisíveis e recuperar
              o controle do seu lucro com um Sistema de Gestão{" "}
              <strong className="text-primary-foreground">Event-Driven</strong> — sem depender de IA
              ou memória humana.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                onClick={() => document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agendar Minha Consultoria Gratuita
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap gap-6 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {[
                { icon: TrendingUp, text: "Aumento de margem" },
                { icon: ShieldCheck, text: "Sem riscos" },
                { icon: Zap, text: "Resultados rápidos" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                  <item.icon className="h-4 w-4 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-3xl" />
              <img
                src={heroDashboard}
                alt="Dashboard de gestão para clínicas de radiologia"
                className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating stat cards */}
            <motion.div
              className="absolute -left-4 top-1/4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xs text-muted-foreground mb-1">Margem Recuperada</div>
              <div className="text-2xl font-bold text-accent">+23%</div>
            </motion.div>

            <motion.div
              className="absolute -right-2 bottom-1/4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="text-xs text-muted-foreground mb-1">Gargalos Eliminados</div>
              <div className="text-2xl font-bold text-accent">12</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative diagonal */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
    </section>
  );
};

export default HeroSection;
