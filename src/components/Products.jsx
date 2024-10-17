import productsData from '../data/products';
import ProductCard from './ProductCard';
import { useState } from 'react';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsToShow = 3; // Number of products to show at a time

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Explore Our Product Range</h2>
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
        >
          &#8249; Prev
        </button>
        <div className="flex overflow-x-auto">
          {productsData
            .slice(currentIndex, currentIndex + productsToShow)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
        >
          Next &#8250;
        </button>
      </div>
    </section>
  );
};

export default Products;
