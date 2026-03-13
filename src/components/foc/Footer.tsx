const Footer = () => {
  return (
    <footer className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 px-6 lg:px-[7vw] py-9"
      style={{ background: 'var(--ink)' }}>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: 'var(--red)' }} />
        <span className="font-mono text-[13px] tracking-[0.08em]" style={{ color: 'var(--paper)' }}>SISTEMA FOC</span>
      </div>
      <p className="font-mono text-[12px] text-center" style={{ color: 'rgba(242,237,228,0.45)' }}>
        Operações previsíveis. Blindagem jurídica. Margem recuperada.
      </p>
      <p className="font-mono text-[12px]" style={{ color: 'rgba(242,237,228,0.25)' }}>
        © 2026 — Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
