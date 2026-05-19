export default function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Livio" role="img">
      <text x="0" y="24" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight={900} fontSize="22" letterSpacing="-0.04em" fill="currentColor">LIVIO</text>
      <circle cx="74" cy="22" r="3" fill="#FFC107" />
      <text x="84" y="24" fontFamily="JetBrains Mono, ui-monospace, monospace" fontWeight={500} fontSize="12" fill="rgba(10,22,40,0.55)">LAIF</text>
    </svg>
  );
}
