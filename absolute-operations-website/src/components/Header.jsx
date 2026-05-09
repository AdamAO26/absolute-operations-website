import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navItems = [
  ['Home', '/'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Portfolio', '/portfolio'],
  ['Contact', '/contact']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <Link to="/" className="brand" aria-label="Absolute Operations home">
  <img
    src="/transparent_main_logo.png"
    alt="Absolute Operations, LLC logo"
    className="brand-logo"
  />
</Link>

      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav ${open ? 'nav--open' : ''}`}>
        {navItems.map(([label, path]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
