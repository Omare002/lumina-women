export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-8 md:px-14 py-6 text-white">
        <a href="#home" className="font-display text-xl tracking-tight">Women.</a>
        <ul className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] font-light">
          <li><a href="#home" className="opacity-90 hover:opacity-100">Home</a></li>
          <li><a href="#gallery" className="opacity-70 hover:opacity-100">Gallery</a></li>
          <li><a href="#quotes" className="opacity-70 hover:opacity-100">Quotes</a></li>
          <li><a href="#about" className="opacity-70 hover:opacity-100">About</a></li>
        </ul>
        <span className="text-[11px] uppercase tracking-[0.22em] font-light opacity-70 hidden md:block">MMXXVI</span>
      </div>
    </nav>
  );
}
