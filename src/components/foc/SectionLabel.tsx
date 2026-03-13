interface SectionLabelProps {
  text: string;
  light?: boolean;
}

const SectionLabel = ({ text, light = false }: SectionLabelProps) => (
  <div className="flex items-center gap-3 mb-8">
    <span
      className="font-mono text-[12px] tracking-[0.2em] uppercase whitespace-nowrap"
      style={{ color: light ? 'rgba(242,237,228,0.45)' : 'var(--muted)' }}
    >
      // {text}
    </span>
    <span
      className="h-px max-w-[200px] flex-1"
      style={{ background: light ? 'rgba(242,237,228,0.12)' : 'var(--line)' }}
    />
  </div>
);

export default SectionLabel;
