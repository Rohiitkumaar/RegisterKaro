import './App.css'
import AboutSection from './components/About.jsx';
import BusinessSection from './components/BussinessSection.jsx';
import ContactLine from './components/ContactLine.jsx';
import HeroSection from './components/HeroSection.jsx';
import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';
import VideoComponent from './components/VideoComponent.jsx';
import HappyClients from './components/HappyClients.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import ProcessSteps from './components/ProcessStop.jsx';
import BlogSection from './components/BlogSection.jsx';
import TestimonialSlider from './components/TestimonialSilder.jsx';
import FAQSection from './components/FAQSection.jsx';
import AppDownloadSection from './components/AppDownloadSection.jsx';
import StatisticsSection from './components/StatisticSection.jsx';
import WelcomeSection from './components/WelcomeSection.jsx';
import Companies from './components/TrustedSection.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <ContactLine />
      <Navbar />
      <HeroSection />
      <BusinessSection />
      <Services />
      <AboutSection />
      <WhyChooseUs/>
      <VideoComponent />
      <HappyClients />
      <ProcessSteps />
      <BlogSection />
      <TestimonialSlider />
      <FAQSection />
      <AppDownloadSection />
      <StatisticsSection />
      <WelcomeSection />
      <Companies />
      <Footer/>
    </>
  );
}

export default App
