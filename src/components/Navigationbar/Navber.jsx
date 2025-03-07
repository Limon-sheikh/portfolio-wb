import { useState, useEffect } from "react";
import Logo from "../Logo";
import List from "../List";
import Button from "../Button";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    <div className="h-[87px]">
      <nav className={`p-3 ${isSticky ? "fixed w-full bg-white shadow-lg z-50 " : "fixd"}`} >
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <List />
          <Button title="Contact Us" border={true} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
