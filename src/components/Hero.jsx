import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <motion.div
        className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold">Harness the Power of the Sun</h2>
        <p className="mt-4 text-lg">Join us in creating a sustainable future.</p>
        <button className="mt-8 px-6 py-2 bg-yellow-500 text-black rounded shadow-lg hover:bg-yellow-400">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
