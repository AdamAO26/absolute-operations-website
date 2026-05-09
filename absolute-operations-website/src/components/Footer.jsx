import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Absolute Operations, LLC</strong>
        <p>Electrical, mechanical, and manufacturing engineering for small businesses ready to compete.</p>
      </div>
      <div className="footer-links">
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Start a Project</Link>
      </div>
    </footer>
  );
}
