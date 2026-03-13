import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface QualificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    question: 'Qual a faixa de faturamento mensal da sua administradora?',
    options: [
      { label: 'Menos de R$ 30k/mês', value: 'low' },
      { label: 'Entre R$ 30k e R$ 80k/mês', value: 'low' },
      { label: 'Entre R$ 80k e R$ 250k/mês', value: 'ok' },
      { label: 'Acima de R$ 250k/mês', value: 'ok' },
    ],
  },
  {
    question: 'Quantas pessoas trabalham na operação da administradora?',
    options: [
      { label: 'Só eu (ou 1 auxiliar)', value: 'low' },
      { label: '5 a 15 pessoas', value: 'ok' },
      { label: '16 a 40 pessoas', value: 'ok' },
      { label: 'Mais de 40 pessoas', value: 'ok' },
    ],
  },
  {
    question: 'Qual problema te incomoda mais hoje?',
    options: [
      { label: 'Laudos e seguros vencendo sem aviso', value: 'ok' },
      { label: 'Demandas de síndicos se perdendo', value: 'ok' },
      { label: 'Sem visão geral da saúde dos condomínios', value: 'ok' },
      { label: 'Retrabalho e equipe apagando incêndio', value: 'ok' },
    ],
  },
];

const QualificationPopup = ({ isOpen, onClose }: QualificationPopupProps) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ s1: string | null; s2: string | null; s3: string | null }>({ s1: null, s2: null, s3: null });
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setAnswers({ s1: null, s2: null, s3: null });
      setSelected(null);
      setShowResult(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (showResult && isQualified()) {
      (async function () {
        const cal = await getCalApi({ namespace: "reuniao-30-min" });
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      })();
    }
  }, [showResult]);

  if (!isOpen) return null;

  const isQualified = () => answers.s1 === 'ok' && answers.s2 !== 'low';

  const handleNext = () => {
    const key = `s${step + 1}` as 's1' | 's2' | 's3';
    const value = questions[step].options[selected!].value;
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    setSelected(null);

    if (step < 2) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(3px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-[520px] max-h-[90vh] overflow-y-auto"
        style={{ background: 'var(--paper)', border: '2px solid var(--ink)', boxShadow: '8px 8px 0 var(--ink)' }}>
        
        {/* Header */}
        <div className="relative px-6 py-6" style={{ background: 'var(--ink)' }}>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>
            ✕
          </button>
          <h3 className="font-display text-[32px]" style={{ color: 'var(--paper)' }}>
            {showResult ? (isQualified() ? 'Diagnóstico confirmado.' : 'Ainda não é o momento certo.') : 'Antes de agendar'}
          </h3>
          {!showResult && (
            <p className="text-[13px] mt-1" style={{ color: 'rgba(242,237,228,0.45)' }}>
              3 perguntas rápidas para garantir que o Diagnóstico seja útil para você.
            </p>
          )}
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {!showResult ? (
            <>
              {/* Progress bar */}
              <div className="flex gap-2 mb-8">
                {[0, 1, 2].map(i => (
                  <div key={i} className="flex-1 h-[2px] transition-all duration-300"
                    style={{ background: i <= step ? 'var(--red)' : 'var(--line)' }} />
                ))}
              </div>

              {/* Question */}
              <p className="font-mono text-[12px] tracking-wide uppercase mb-6" style={{ color: 'var(--ink)' }}>
                {questions[step].question}
              </p>

              {/* Options */}
              <div className="flex flex-col gap-3 mb-8">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className="text-left text-[14px] font-light px-5 py-4 cursor-pointer transition-all duration-150"
                    style={{
                      border: selected === i ? '2px solid var(--red)' : '1px solid var(--line)',
                      background: selected === i ? '#fdf0ed' : 'transparent',
                      padding: selected === i ? '15px 19px' : '16px 20px',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                disabled={selected === null}
                className="w-full font-mono text-[13px] tracking-[0.08em] uppercase transition-all duration-200"
                style={{
                  background: selected !== null ? 'var(--ink)' : 'var(--line)',
                  color: selected !== null ? 'var(--paper)' : 'var(--muted)',
                  padding: '16px',
                  border: 'none',
                  cursor: selected !== null ? 'pointer' : 'not-allowed',
                  boxShadow: selected !== null ? '4px 4px 0 var(--red)' : 'none',
                }}
              >
                {step < 2 ? 'Próxima →' : 'Ver disponibilidade →'}
              </button>
            </>
          ) : isQualified() ? (
            <div>
              <div className="text-5xl mb-4">✅</div>
              <p className="text-[14px] font-light leading-[1.7] mb-6">
                Suas respostas indicam que o Diagnóstico pode ter impacto real na sua operação. Escolha um horário:
              </p>
              <div style={{ width: '100%', minHeight: '500px' }}>
                <Cal
                  namespace="reuniao-30-min"
                  calLink="caio-terencio-yjozs1/reuniao-30-min"
                  config={{ layout: "month_view" }}
                  style={{ width: '100%', height: '100%', minHeight: '500px' }}
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="text-5xl mb-4">🤝</div>
              <p className="text-[14px] font-light leading-[1.7] mb-6">
                Pelo que você nos contou, o Diagnóstico não vai gerar o retorno que você merece agora.
                Quando o momento chegar, estaremos aqui.
              </p>
              <a href="#" className="font-mono text-[13px] tracking-wide" style={{ color: 'var(--red)' }}>
                → Acessar conteúdo gratuito
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QualificationPopup;
