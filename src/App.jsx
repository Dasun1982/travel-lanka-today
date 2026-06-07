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
import ScrollReveal from './components/shared/ScrollReveal.jsx';

function isToursPath() {
  return typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/tours';
}

function App() {
  const [showToursPage, setShowToursPage] = useState(isToursPath);

  useEffect(() => {
    const updatePage = () => setShowToursPage(isToursPath());

    window.addEventListener('popstate', updatePage);

    return () => window.removeEventListener('popstate', updatePage);
  }, []);

  return (
    <>
      <ScrollReveal pageKey={showToursPage ? 'tours' : 'home'} />
      <Header />
      {showToursPage ? (
        <ToursPage />
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
