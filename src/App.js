import Header from './components/Header';
import './App.css'; 
import UniversitySimulator from './components/UniversitySimulator';
import PricePlans from './components/PricePlans';
import WhyMalaysia from './components/WhyMalaysia';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="simulator">
          <UniversitySimulator />
        </section>
        <section id="plans">
          <PricePlans />
        </section>
        <section id="why-malaysia">
          <WhyMalaysia />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
