import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Absolute Operations, LLC</strong>
        <p>Enterprise Innovation for Small Business.</p>
      </div>
      <div className="footer-links">
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </footer>
  );
}
