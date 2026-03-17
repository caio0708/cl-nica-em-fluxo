import SectionLabel from "./SectionLabel";

interface DiagnosticSectionProps {
  onOpenPopup: () => void;
}

const steps = [
  'Mapeamos sua operação atual. Perguntas específicas para administradoras — não um questionário genérico.',
  'Identificamos onde está o vazamento. Os pontos exatos de perda de tempo, dinheiro e clientes — com ou sem fechamento.',
  'Mostramos o que muda em 12 dias. Em linguagem de negócio. Sem jargão técnico, sem promessa vaga.',
  'Somos honestos. Se não fizer sentido para o seu momento, dizemos antes de qualquer proposta. Sem pressão.',
];

const offerItems = [
  'Mapeamento do fluxo da sua administradora',
  'Identificação dos prazos críticos em risco hoje',
  'Diagnóstico de onde estão os vazamentos operacionais',
  'Visão clara do que muda com processo + automação',
  '30 minutos · sem compromisso · sem follow-up agressivo',
];

const DiagnosticSection = ({ onOpenPopup }: DiagnosticSectionProps) => {
  return (
    <section style={{ background: 'var(--paper-dark)' }} className="py-20 md:py-28 relative z-10">
      <div className="px-6 lg:px-[7vw]">
        <SectionLabel text="o que acontece no diagnóstico gratuito" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px]">
          {/* Left column */}
          <div>
            <h2 className="font-display leading-[0.95] mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              30 minutos.<br />
              <span style={{ color: 'var(--red)' }}>RESULTADO</span><br />
              concreto.
            </h2>
            <p className="text-[19px] font-light leading-[1.75] mb-10 max-w-[520px]" style={{ color: 'var(--muted)' }}>
              Não é reunião de vendas. É um diagnóstico real da sua operação — útil mesmo que você não feche nada.
              Se não fizer sentido para você, a gente diz.
            </p>
            <div>
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 py-5" style={{ borderBottom: '1px solid var(--line)' }}>
                  <span className="font-mono text-[14px] w-7 shrink-0 pt-1" style={{ color: 'var(--red)' }}>0{i + 1}</span>
                  <p className="text-[18px] font-light leading-[1.7]">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — offer card */}
          <div className="lg:sticky lg:top-10 self-start">
            <div style={{ border: '2px solid var(--ink)', boxShadow: '6px 6px 0 var(--ink)' }}>
              {/* Card header */}
              <div className="flex items-center justify-between px-6 py-5" style={{ background: 'var(--ink)' }}>
                <div>
                  <span className="font-mono text-[12px] tracking-wide block" style={{ color: 'rgba(242,237,228,0.45)' }}>
                    Diagnóstico Operacional
                  </span>
                  <span className="font-display text-[28px]" style={{ color: 'var(--paper)' }}>Sistema FOC</span>
                </div>
                <span className="font-mono text-[12px] tracking-wide uppercase px-3 py-1"
                  style={{ color: 'var(--red)', border: '1px solid var(--red)', background: 'rgba(192,49,26,0.1)' }}>
                  Gratuito
                </span>
              </div>

              {/* Card body */}
              <div className="px-6 py-2" style={{ background: 'var(--paper)' }}>
                {offerItems.map((item, i) => (
                  <div key={i} className="flex gap-3 py-4 text-[15px] font-light" style={{ borderBottom: '1px solid var(--line)' }}>
                    <span style={{ color: 'var(--red)' }}>→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="px-6 py-6" style={{ background: 'var(--paper)' }}>
                <button
                  onClick={onOpenPopup}
                  className="w-full font-mono text-[15px] tracking-[0.08em] uppercase cursor-pointer transition-all duration-200"
                  style={{
                    background: 'var(--red)',
                    color: '#fff',
                    padding: '18px 36px',
                    border: 'none',
                    boxShadow: '3px 3px 0 var(--red-dim)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                    e.currentTarget.style.boxShadow = '5px 5px 0 var(--red-dim)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = '3px 3px 0 var(--red-dim)';
                  }}
                >
                  Agendar meu Diagnóstico →
                </button>
                <p className="font-mono text-[11px] text-center mt-4" style={{ color: 'var(--muted)' }}>
                  Vagas limitadas por mês para garantir qualidade<br />
                  Exclusivo para administradoras com carteira ativa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
