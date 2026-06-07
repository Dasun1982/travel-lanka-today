import { useEffect, useState } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/home/Hero.jsx';
import MeetKithsiri from './components/home/MeetKithsiri.jsx';
import ExperienceMosaic from './components/home/ExperienceMosaic.jsx';
import ToursPreview from './components/home/ToursPreview.jsx';
import GalleryMasonry from './components/home/GalleryMasonry.jsx';
import FinalCTA from './components/home/FinalCTA.jsx';
import ToursPage from './components/pages/ToursPage.jsx';
import GuidePage from './components/pages/GuidePage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import ScrollReveal from './components/shared/ScrollReveal.jsx';

function getCurrentPage() {
  if (typeof window === 'undefined') {
    return 'home';
  }

  const path = window.location.pathname.replace(/\/$/, '');

  if (path === '/tours') {
    return 'tours';
  }

  if (path === '/guide') {
    return 'guide';
  }

  if (path === '/contact') {
    return 'contact';
  }

  return 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);

  useEffect(() => {
    const updatePage = () => setCurrentPage(getCurrentPage());

    window.addEventListener('popstate', updatePage);

    return () => window.removeEventListener('popstate', updatePage);
  }, []);

  return (
    <>
      <ScrollReveal pageKey={currentPage} />
      <Header />
      {currentPage === 'tours' ? (
        <ToursPage />
      ) : currentPage === 'guide' ? (
        <GuidePage />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : (
        <main>
          <Hero />
          <MeetKithsiri />
          <ExperienceMosaic />
          <ToursPreview />
          <GalleryMasonry />
          <FinalCTA />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
