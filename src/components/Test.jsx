import  { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-4 text-white flex justify-between items-center w-full z-50 shadow-md transition-all duration-700 ease-in-out transform ${
        isSticky ? "fixed top-0 bg-orange-500 opacity-90 translate-y-0" : "fixed top-0 bg-red-500 opacity-100 -translate-y-full"
      }`}
    >
      <h1 className="text-2xl font-bold">My Website</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-gray-200 text-center py-20 mt-16">
      <h2 className="text-4xl font-bold">Welcome to My Website</h2>
      <p className="text-lg mt-4">This is a simple hero section using Tailwind CSS.</p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">Get Started</button>
    </section>
  );
};

const Content = () => {
  return (
    <section className="p-8">
      <h3 className="text-2xl font-semibold">About Us</h3>
      <p className="mt-2 text-gray-700">We provide quality content and resources to help you grow.</p>
    </section>
  );
};

const ExtraContent = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h3 className="text-2xl font-semibold">Our Services</h3>
      <p className="mt-2 text-gray-700">We offer web development, design, and consulting services.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="p-4 bg-white shadow rounded transform transition duration-500 hover:scale-105">
            <h4 className="text-xl font-bold">Service {index + 1}</h4>
            <p className="text-gray-600">Description of service {index + 1}. We offer high-quality solutions.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-4 mt-8">
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <ExtraContent />
      <Footer />
    </div>
  );
};

export default App;