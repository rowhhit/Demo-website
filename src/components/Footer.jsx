const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h5 className="font-bold mb-2">About Solahart</h5>
          <p>
            Pioneering solar solutions in Australia since 1953, we are committed to sustainability and innovation.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Quick Links</h5>
          <ul>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Customer Support</h5>
          <ul>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Contact Us</h5>
          <p>Email: support@solahart.com.au</p>
          <p>Phone: 1800 123 456</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">© {new Date().getFullYear()} Solahart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
