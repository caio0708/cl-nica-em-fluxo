import { useEffect, useRef } from "react";

interface HeroSectionProps {
  onOpenPopup: () => void;
}

const rulerLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

const stats = [
  { value: '12', suffix: 'd', color: 'var(--red)', label: 'implementação' },
  { value: '30', suffix: 'd', color: 'var(--red)', label: 'suporte pós-entrega' },
  { value: '7', suffix: 'd', color: 'var(--red)', label: 'garantia incondicional' },
  { value: '0', suffix: '×', color: 'var(--red)', label: 'prazos esquecidos pós-FOC' },
];

const HeroSection = ({ onOpenPopup }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${0.1 + i * 0.15}s`;
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col" style={{ background: 'var(--paper)' }}>
      {/* Ruler strip */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-10 flex-col justify-around items-center py-20 z-10"
        style={{ borderRight: '1px solid var(--line)' }}>
        {rulerLetters.map(l => (
          <span key={l} className="font-mono text-[7px]" style={{ color: 'var(--muted)' }}>{l}</span>
        ))}
      </div>

      {/* Ghost FOC text */}
      <div className="absolute bottom-10 right-6 z-0 select-none pointer-events-none font-display"
        style={{ fontSize: 'clamp(120px, 18vw, 220px)', color: 'rgba(192,49,26,0.08)', lineHeight: 1 }}>
        FOC
      </div>

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-[7vw] py-5"
        style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: 'var(--red)' }} />
          <span className="font-mono text-xs tracking-[0.08em] font-medium" style={{ color: 'var(--ink)' }}>SISTEMA FOC</span>
        </div>
        <span className="hidden sm:inline-block font-mono text-[12px] tracking-wide px-3 py-1.5"
          style={{ border: '1px solid var(--line)', color: 'var(--muted)' }}>
          Administradoras · Diagnóstico gratuito
        </span>
      </nav>

      {/* Hero body */}
      <div className="relative z-10 flex-1 flex items-center px-6 lg:px-[7vw] lg:pl-[calc(7vw+40px)]">
        <div className="max-w-[880px] py-16">
          {/* Pre-label */}
          <div className="fade-up flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5" style={{ background: 'var(--red)' }} />
            <span className="font-mono text-[13px] tracking-[0.15em] uppercase font-medium" style={{ color: 'var(--red)' }}>
              ALERTA OPERACIONAL
            </span>
          </div>

          {/* H1 */}
          <h1 className="fade-up font-display leading-[0.92] tracking-[0.01em] mb-8"
            style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}>
            Cada semana, sua<br />
            operação <span style={{ color: 'var(--red)' }}>SANGRA</span><br />
            <span style={{ WebkitTextStroke: '2px var(--ink)', color: 'transparent' }}>em silêncio.</span>
          </h1>

          {/* Subtitle */}
          <p className="fade-up text-[15px] md:text-[17px] leading-[1.75] max-w-[620px] mb-10 font-light"
            style={{ borderLeft: '3px solid var(--red)', paddingLeft: '20px', color: 'var(--ink)' }}>
            Cada prazo legal esquecido, cada demanda perdida no WhatsApp, cada contrato renovando no automático
            — são multas, processos e clientes que somem. E tudo isso acontece toda semana, em silêncio.
          </p>

          {/* CTA */}
          <button
            onClick={onOpenPopup}
            className="fade-up font-mono text-[13px] tracking-[0.08em] uppercase cursor-pointer transition-all duration-200"
            style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              padding: '18px 36px',
              border: 'none',
              boxShadow: '4px 4px 0 var(--red)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translate(-3px, -3px)';
              e.currentTarget.style.boxShadow = '7px 7px 0 var(--red)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '4px 4px 0 var(--red)';
            }}
          >
            Quero um Diagnóstico gratuito →
          </button>

          {/* Micro qualifier */}
          <p className="fade-up font-mono text-[10px] mt-4" style={{ color: 'var(--muted)' }}>
            30 minutos · gratuito · exclusivo para administradoras com carteira ativa
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="fade-up relative z-10 grid grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: '1px solid var(--line)' }}>
        {stats.map((s, i) => (
          <div key={i} className="px-6 py-5 text-center"
            style={{ borderRight: i < stats.length - 1 ? '1px solid var(--line)' : 'none' }}>
            <div className="font-display text-4xl">
              {s.value}<span style={{ color: s.color }}>{s.suffix}</span>
            </div>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mt-1" style={{ color: 'var(--muted)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
