interface FloatingButtonProps {
  onOpenPopup: () => void;
}

const FloatingButton = ({ onOpenPopup }: FloatingButtonProps) => {
  return (
    <button
      onClick={onOpenPopup}
      className="fixed bottom-6 right-6 z-50 font-mono text-[14px] tracking-[0.08em] uppercase cursor-pointer transition-all duration-200"
      style={{
        background: 'var(--red)',
        color: '#fff',
        padding: '14px 24px',
        border: 'none',
        boxShadow: '4px 4px 0 rgba(192,49,26,0.3)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = '6px 6px 0 rgba(192,49,26,0.3)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = '4px 4px 0 rgba(192,49,26,0.3)';
      }}
    >
      Agendar Diagnóstico →
    </button>
  );
};

export default FloatingButton;
