import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieConsent } from './components/ui/CookieConsent';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { Contact } from './pages/Contact';
import { OurStory } from './pages/OurStory';
import { TournamentManagement } from './pages/TournamentManagement';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <CookieConsent />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/tournaments" element={<TournamentManagement />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
