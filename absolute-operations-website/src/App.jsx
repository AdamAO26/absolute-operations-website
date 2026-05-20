import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
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
    let leftPage = false;

    const markLeftPage = () => {
      leftPage = true;
    };

    const refreshIfReturning = () => {
      if (leftPage) {
        window.location.reload();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        markLeftPage();
      }

      if (document.visibilityState === 'visible') {
        refreshIfReturning();
      }
    };

    window.addEventListener('blur', markLeftPage);
    window.addEventListener('focus', refreshIfReturning);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('blur', markLeftPage);
      window.removeEventListener('focus', refreshIfReturning);
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
