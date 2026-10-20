import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Members from '@/components/Members';
import Discography from '@/components/Discography';
import TourDates from '@/components/TourDates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#B32424]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Members />
        <Discography />
        <TourDates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
