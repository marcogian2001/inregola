import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-light)",
        background: "var(--bg-card)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logo.webp"
          alt="InRegola"
          width={110}
          height={32}
          className="h-7 w-auto"
        />
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} InRegola. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
