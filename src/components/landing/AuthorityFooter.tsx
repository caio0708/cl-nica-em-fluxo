import { motion } from "framer-motion";

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
          <div className="w-28 h-28 rounded-2xl bg-secondary flex items-center justify-center shrink-0 text-3xl font-display font-bold text-muted-foreground">
            ?
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-2">Quem sou eu?</p>
            <p className="text-foreground leading-relaxed">
              Sou especialista em automação e arquitetura de sistemas. Ajudo clínicas a transformarem processos manuais e falhos em{" "}
              <strong>linhas de produção de saúde eficientes e lucrativas</strong>. Meu foco não é te vender uma ferramenta — é te entregar uma operação que funciona sozinha.
            </p>
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
