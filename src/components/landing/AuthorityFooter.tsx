import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import caioPhoto from "@/assets/caio-photo.png";

const AuthorityFooter = () => {
  return (
    <footer className="py-16 md:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={caioPhoto}
            alt="Caio Terêncio"
            className="w-28 h-28 rounded-2xl object-cover shrink-0"
          />
          <div>
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-2">Quem sou eu?</p>
            <p className="text-foreground leading-relaxed mb-3">
              Sou especialista em automação e arquitetura de sistemas. Ajudo clínicas a transformarem processos manuais e falhos em{" "}
              <strong>linhas de produção de saúde eficientes e lucrativas</strong>. Meu foco não é te vender uma ferramenta — é te entregar uma operação que funciona sozinha.
            </p>
            <a
              href="https://instagram.com/caioterencio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @caioterencio
            </a>
          </div>
        </motion.div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          © {new Date().getFullYear()} • Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default AuthorityFooter;
