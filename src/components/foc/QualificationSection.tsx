import SectionLabel from "./SectionLabel";

const yesItems = [
  'Você administra uma carteira ativa e fatura acima de R$ 80k/mês',
  'Usa WhatsApp, planilha e e-mail para gerenciar obrigações dos condomínios',
  'O dono ou sócio resolve operação em vez de crescer a carteira',
  'Já perdeu pelo menos um prazo legal nos últimos 12 meses',
  'Não tem visão em tempo real da saúde de cada condomínio',
];

const noItems = [
  'Você administra sozinho 2 ou 3 condomínios sem equipe',
  'Quer instalar "uma ferramenta" — entregamos processo + automação + dados',
  'Não está disposto a envolver a equipe na transição',
  'Já tem sistema funcionando bem e busca apenas ajustes',
];

const QualificationSection = () => {
  return (
    <section style={{ background: 'var(--paper)' }} className="py-20 md:py-28 relative z-10">
      <div className="px-6 lg:px-[7vw]">
        <SectionLabel text="filtro de perfil" />
        <h2 className="font-display leading-[0.95] mb-12" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          Para quem<br />
          <span style={{ color: 'var(--red)' }}>É — E NÃO É.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1px', background: 'var(--line)' }}>
          {/* Yes column */}
          <div className="p-8 md:p-10" style={{ background: '#f7f3ec' }}>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase block mb-6" style={{ color: '#1a6b3c' }}>
              ✓ Faz sentido para você se…
            </span>
            <div className="flex flex-col gap-4">
              {yesItems.map((item, i) => (
                <div key={i} className="flex gap-3 text-[14px] font-light leading-[1.6]">
                  <span className="text-[14px] shrink-0" style={{ color: '#1a6b3c' }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* No column */}
          <div className="p-8 md:p-10" style={{ background: '#fdf0ed' }}>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase block mb-6" style={{ color: 'var(--red)' }}>
              ✕ Não faz sentido se…
            </span>
            <div className="flex flex-col gap-4">
              {noItems.map((item, i) => (
                <div key={i} className="flex gap-3 text-[14px] font-light leading-[1.6]">
                  <span className="text-[14px] shrink-0" style={{ color: 'var(--red)' }}>✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
