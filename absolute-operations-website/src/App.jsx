import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function RefreshOnReturn() {
  useEffect(() => {
    const refreshAfterMs = 15 * 60 * 1000;
    let leftAt = null;

    const markLeftPage = () => {
      leftAt = Date.now();
      sessionStorage.setItem('absoluteOpsLeftAt', String(leftAt));
    };

    const refreshIfAwayTooLong = () => {
      const savedLeftAt = Number(sessionStorage.getItem('absoluteOpsLeftAt') || leftAt || 0);

      if (savedLeftAt && Date.now() - savedLeftAt >= refreshAfterMs) {
        sessionStorage.removeItem('absoluteOpsLeftAt');
        window.location.reload();
        return;
      }

      leftAt = null;
      sessionStorage.removeItem('absoluteOpsLeftAt');
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        markLeftPage();
      }

      if (document.visibilityState === 'visible') {
        refreshIfAwayTooLong();
      }
    };

    window.addEventListener('pagehide', markLeftPage);
    window.addEventListener('pageshow', refreshIfAwayTooLong);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('pagehide', markLeftPage);
      window.removeEventListener('pageshow', refreshIfAwayTooLong);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <RefreshOnReturn />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
