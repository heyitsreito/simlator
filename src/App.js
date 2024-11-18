import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UniversitySimulator from './components/UniversitySimulator';
import PricePlans from './components/PricePlans';
import WhyMalaysia from './components/WhyMalaysia';
import FAQPage from './components/FAQPage';
import BlogPages from './components/BlogPages'; // Blogページをインポート

function App() {
  return (
    <Router basename="/simulator"> {/* 必要に応じて basename を設定 */}
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<UniversitySimulator />} /> {/* デフォルトのルート */}
            <Route path="/simulator" element={<UniversitySimulator />} />
            <Route path="/plans" element={<PricePlans />} />
            <Route path="/why-malaysia" element={<WhyMalaysia />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPages />} /> {/* Blogルート */}
            <Route path="*" element={<div>404 - ページが見つかりません</div>} /> {/* 404ページ */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
