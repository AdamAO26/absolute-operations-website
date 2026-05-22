import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const leftNavItems = [
  ['Home', '/'],
  ['Services', '/services']
];

const rightNavItems = [
  ['About', '/about'],
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

  const renderNavItems = (items) =>
    items.map(([label, path]) => (
      <NavLink
        key={path}
        to={path}
        onClick={() => setOpen(false)}
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        {label}
      </NavLink>
    ));

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <nav className={`nav nav-left ${open ? 'nav--open' : ''}`}>
        {renderNavItems(leftNavItems)}
      </nav>

      <Link to="/" className="brand brand-centered" aria-label="Absolute Operations home">
        <img
          src="/transparent_main_logo.png"
          alt="Absolute Operations, LLC logo"
          className="brand-logo"
        />
      </Link>

      <nav className={`nav nav-right ${open ? 'nav--open' : ''}`}>
        {renderNavItems(rightNavItems)}
      </nav>

      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}