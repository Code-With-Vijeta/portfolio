import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const links = [
  ["About", "#about"],
  ["Expertise", "#skills"],
  ["Projects", "#projects"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home">
          VIJETA<span>.</span>
        </a>
        <nav className="desktop-nav">
          {links.map(([n, u]) => (
            <a key={n} href={u}>
              {n}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Let's Talk <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {links.map(([n, u]) => (
              <a key={n} href={u} onClick={() => setOpen(false)}>
                {n}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
