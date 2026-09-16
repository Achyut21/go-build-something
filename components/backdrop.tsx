export function Backdrop({ hidden }: { hidden: boolean }) {
  if (hidden) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="wash" />
      <div className="lamp lamp-warm" />
      <div className="lamp lamp-cool" />
      <div className="grain" />
    </div>
  );
}
