import { useState } from "react";
import HeroImg from "../assets/img/heroimg.png";
import Button from "./Button";
import { MdOutlineFileDownload } from "react-icons/md";

const HeroSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Mouse Move Event Handle kora
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e; // Cursor Position
    const moveX = (clientX - window.innerWidth / 2) / 25; // X Movement (Reduced Sensitivity)
    const moveY = (clientY - window.innerHeight / 2) / 25; // Y Movement
    setPosition({ x: moveX, y: moveY });
  };

  // Mouse Leave korle Default position aa fire jabe
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="flex justify-between h-[616px] mt-16 items-center ">
      <div className="w-[55%]">
        <h1 className="text-gray-900 text-8xl font-bold mt-28 leading-[1.1] uppercase">Hello I’m <br /> Limon Sheikh</h1>
        <h2 className="text-[20px] mt-8">A Passionate Front-end Developer</h2>

        {/* Buttons */}
        <div className="flex gap-4 mt-12">
          <Button title="View More" bgColor="bg-green-500" textColor="text-black" border={false} />
          <Button title="Download CV" border={true} icon={<MdOutlineFileDownload />} />
        </div>
      </div>

      {/* Image with Mouse Move Effect */}
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
          className="w-[45%] flex justify-center items-center relative overflow-hidden">
        <img src={HeroImg} alt="This is hero image..."
          style={{transform: `translate(${position.x}px, ${position.y}px) scale(1.05)`}}
          className="h-[561px] object-cover transition-transform duration-500 ease-out"
        />
      </div>
    </section>
  );
};

export default HeroSection;