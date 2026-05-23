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

const mobileNavItems = [...leftNavItems, ...rightNavItems];

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
      <nav className="nav nav-left">
        {renderNavItems(leftNavItems)}
      </nav>

      <Link to="/" className="brand brand-centered" aria-label="Absolute Operations home">
        <img
          src="/transparent_main_logo.png"
          alt="Absolute Operations, LLC logo"
          className="brand-logo"
        />
      </Link>

      <nav className="nav nav-right">
        {renderNavItems(rightNavItems)}
      </nav>

      <div className="usa-badge" aria-label="PROUDLY OPERATING IN THE USA">
        <span>PROUDLY OPERATING IN THE USA</span>
        <img
         className="usa-flag"
         src="/usa-flag1.jpg"
          alt=""
          aria-hidden="true"
        />
      </div>

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

      <nav className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`}>
        {renderNavItems(mobileNavItems)}
      </nav>
    </header>
  );
}