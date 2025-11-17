import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { Contact } from './pages/Contact';
import { TournamentManagement } from './pages/TournamentManagement';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tournaments" element={<TournamentManagement />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
