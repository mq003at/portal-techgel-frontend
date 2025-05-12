export const LinkCell = ({ getValue }: { getValue: () => string }) => (
  <a className="inline-flex items-center gap-4 text-blue-600 no-underline"
    href={getValue()}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    onMouseOver={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline';
    }}
    onMouseOut={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none';
    }}
  >
    {getValue()}
  </a>
);
