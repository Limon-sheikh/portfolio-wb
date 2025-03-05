import { useState, useEffect } from "react";
import Logo from "../Logo";
import List from "../List";
import Button from "../Button";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 w-full bg-white shadow-lg z-50" : "relative"}`} >
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <List />
          <Button title="Contact Us" border={true} />
        </div>
    </nav>
  );
};

export default Navbar;
