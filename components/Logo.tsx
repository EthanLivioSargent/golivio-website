export default function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  // One Helvetica stack for the whole wordmark — matches the rest of the site.
  const helv = '"Helvetica Neue", Helvetica, Arial, "Liberation Sans", system-ui, sans-serif';
  return (
    <svg className={className} viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Livio" role="img">
      <text x="0" y="24" fontFamily={helv} fontWeight={900} fontSize="22" letterSpacing="-0.04em" fill="currentColor">LIVIO</text>
      <circle cx="74" cy="22" r="3" fill="#FFC107" />
      <text x="84" y="24" fontFamily={helv} fontWeight={600} fontSize="11" letterSpacing="0.06em" fill="currentColor" fillOpacity="0.55">LAIF</text>
    </svg>
  );
}
