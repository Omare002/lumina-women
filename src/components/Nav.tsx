import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-8 md:px-14 py-6 text-white">
        <Link to="/" className="font-display text-xl tracking-tight">Women.</Link>
        <ul className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] font-light">
          <li><Link to="/" className="opacity-90 hover:opacity-100">Home</Link></li>
          <li><Link to="/women" className="opacity-70 hover:opacity-100">Women</Link></li>
          <li><Link to="/#gallery" className="opacity-70 hover:opacity-100">Gallery</Link></li>
          <li><Link to="/#quotes" className="opacity-70 hover:opacity-100">Quotes</Link></li>
          <li><Link to="/#about" className="opacity-70 hover:opacity-100">About</Link></li>
        </ul>
        <span className="text-[11px] uppercase tracking-[0.22em] font-light opacity-70 hidden md:block">


        </span>
      </div>
    </nav>
  );
}
