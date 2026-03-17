import SectionLabel from "./SectionLabel";

const cards = [
  { num: '01', cat: 'PRAZO LEGAL', title: 'AVCB, laudo de elevador ou seguro vencendo — e ninguém sabe.', desc: 'O prazo passa. O condomínio é notificado. A responsabilidade recai sobre a administradora. Não sobre o síndico — sobre você.', tag: 'risco jurídico ativo' },
  { num: '02', cat: 'DEMANDA PERDIDA', title: 'O síndico pediu algo no WhatsApp. Ninguém registrou.', desc: 'Dez dias depois ele liga furioso. "Mas eu avisei!" Você não tem como provar o contrário. O atrito vira insatisfação. A insatisfação vira troca de administradora.', tag: 'cliente em risco' },
  { num: '03', cat: 'SEM VISÃO GLOBAL', title: 'Você não sabe, hoje, a saúde real de cada condomínio.', desc: 'Para descobrir o que vence nos próximos 60 dias, você precisa abrir planilhas, e-mails e ligar para a equipe. Isso não é gestão — é arqueologia.', tag: 'decisão no achismo' },
  { num: '04', cat: 'RETRABALHO', title: 'O mesmo contrato foi procurado quatro vezes essa semana.', desc: 'Cada pessoa foi buscar no e-mail, na pasta, no grupo. A informação não está em lugar nenhum — está na cabeça de alguém que talvez já nem trabalhe mais lá.', tag: 'horas desperdiçadas' },
  { num: '05', cat: 'CONTRATO AUTOMÁTICO', title: 'Fornecedor renovando contrato no automático — há 3 anos.', desc: 'Sem nova cotação, sem reavaliação, sem análise de preço de mercado. Você está pagando mais caro do que precisa. Todo mês. Desde quando você nem lembra.', tag: 'margem corroída' },
  { num: '06', cat: 'DONO BOMBEIRO', title: 'Você não cresce a carteira porque vive apagando incêndio.', desc: 'Enquanto deveria estar fechando novos contratos e renegociando acordos, você passa o dia cobrindo gap de equipe, resolvendo conflito com fornecedor e respondendo WhatsApp de síndico.', tag: 'crescimento bloqueado' },
];

const PainSection = () => {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--paper)' }} className="py-20 md:py-28 relative z-10">
      <div className="px-6 lg:px-[7vw] mb-14">
        <SectionLabel text="falhas que custam caro — hoje, na sua administradora" light />
        <h2 className="font-display leading-[0.95] mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          Reconhece alguma dessas<br />
          <span style={{ color: 'var(--red)' }}>SITUAÇÕES?</span>
        </h2>
        <p className="text-[19px] font-light max-w-[600px] leading-[1.75]" style={{ color: 'rgba(242,237,228,0.55)' }}>
          Não são hipóteses. São os pontos exatos onde administradoras de condomínios perdem margem,
          clientes e reputação — sem perceber.
        </p>
      </div>

      <div className="px-6 lg:px-[7vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '1px', background: 'rgba(242,237,228,0.08)' }}>
          {cards.map((card) => (
            <div
              key={card.num}
              className="group flex flex-col gap-4 transition-colors duration-300"
              style={{ background: 'var(--ink)', padding: '36px 28px', borderTop: '3px solid transparent' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderTopColor = 'var(--red)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--ink)';
                e.currentTarget.style.borderTopColor = 'transparent';
              }}
            >
              <span className="font-mono text-[14px] tracking-[0.2em] uppercase" style={{ color: 'var(--red)' }}>
                {card.num} — {card.cat}
              </span>
              <h3 className="font-body text-[18px] font-medium leading-[1.4]" style={{ color: 'var(--paper)' }}>
                {card.title}
              </h3>
              <p className="text-[15px] font-light leading-[1.7]" style={{ color: 'rgba(242,237,228,0.45)' }}>
                {card.desc}
              </p>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase mt-auto px-2 py-1 self-start"
                style={{ color: 'var(--red)', border: '1px solid var(--red)' }}>
                {card.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
