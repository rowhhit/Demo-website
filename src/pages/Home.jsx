import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import About from '../components/About';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About/>
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
