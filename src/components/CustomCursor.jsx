import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a, button");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setIsHovered(true));
      link.addEventListener("mouseleave", () => setIsHovered(false));
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => setIsHovered(true));
        link.removeEventListener("mouseleave", () => setIsHovered(false));
      });
    };
  }, []);

  return (
    <div>
        <div
            className={`fixed top-0 left-0 w-7 h-7 border-2 border-gray-400 rounded-full pointer-events-none transition-transform duration-700 ease-out ${
            isHovered ? "scale-150" : "scale-100"
            }`}
            style={{transform: `translate(${position.x - 14}px, ${position.y - 14}px)`, zIndex: 9999,}}
            >
        </div>
    </div>
  );
};

export default CustomCursor;


