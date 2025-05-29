import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import BotPage from './pages/BotPage';
import TalkPage from './pages/TalkPage';
import ImagesPage from './pages/ImagesPage';
import DiffusionPage from './pages/DiffusionPage';
import CommunityPage from './pages/CommunityPage';
import SettingsPage from './pages/SettingsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FeedbackPage from './pages/FeedbackPage';
import TermsPage from './pages/TermsPage';
import PaymentHistoryPage from './pages/PaymentHistoryPage';
import UsageHistoryPage from './pages/UsageHistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="bot" element={<BotPage />} />
          <Route path="talk" element={<TalkPage />} />
          <Route path="images" element={<ImagesPage />} />
          <Route path="diffusion" element={<DiffusionPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="payment-history" element={<PaymentHistoryPage />} />
          <Route path="usage-history" element={<UsageHistoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;