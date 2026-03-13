interface FinalCTASectionProps {
  onOpenPopup: () => void;
}

const FinalCTASection = ({ onOpenPopup }: FinalCTASectionProps) => {
  return (
    <section className="py-24 md:py-32 text-center relative z-10" style={{ background: 'var(--red)' }}>
      <div className="px-6 lg:px-[7vw]">
        <h2 className="font-display leading-[0.92] mb-6" style={{ fontSize: 'clamp(52px, 8vw, 110px)', color: '#fff' }}>
          Pare de<br />
          <span style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}>ADIVINHAR.</span>
        </h2>
        <p className="text-[18px] font-light leading-[1.75] max-w-[520px] mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Saiba exatamente onde sua administradora está vazando — em 30 minutos, de graça.
        </p>
        <button
          onClick={onOpenPopup}
          className="font-mono text-[15px] tracking-[0.08em] uppercase cursor-pointer transition-all duration-200 mx-auto block"
          style={{
            background: '#fff',
            color: 'var(--red)',
            padding: '18px 48px',
            border: 'none',
            boxShadow: '5px 5px 0 rgba(0,0,0,0.2)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translate(-3px, -3px)';
            e.currentTarget.style.boxShadow = '8px 8px 0 rgba(0,0,0,0.2)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translate(0, 0)';
            e.currentTarget.style.boxShadow = '5px 5px 0 rgba(0,0,0,0.2)';
          }}
        >
          Agendar Diagnóstico Gratuito →
        </button>
        <p className="font-mono text-[12px] mt-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Gratuito · 30 min · Sem compromisso · Se não fizer sentido, a gente diz
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
