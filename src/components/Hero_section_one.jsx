
// import { useState } from "react";
// import HeroImg from "../assets/img/heroimg.png"
// import Button from "./Button";
// import { MdOutlineFileDownload } from "react-icons/md";

// const Hero_section_one = () => {

//     // X এবং Y এর জন্য state
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   // Mouse Move Event Handle করা
//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e; // Cursor Position
//     const moveX = (clientX - window.innerWidth / 2) / 20; // X Movement
//     const moveY = (clientY - window.innerHeight / 2) / 20; // Y Movement
//     setPosition({ x: moveX, y: moveY });
//   };

//    // Mouse Leave করলে Default অবস্থায় ফিরে যাবে
//    const handleMouseLeave = () => {
//     setPosition({ x: 0, y: 0 }); // Default অবস্থায় নিয়ে আসা
//   };

//     return (
//         <div className="flex justify-between mt-20">
//             <div className="w-[800px]">
//                 <div>
//                     <h1 className="text-gray-900 text-8xl font-bold mt-32 leading-[1.1] uppercase">hello i’m <br/> limon sheikh</h1>
//                     <p className="text-[18px] mt-8">A personal portfolio is a collection of your work, achievements,   and skills that highlights your abilities and professional growth. It serves as</p>
//                 </div>
//                 <div className="flex gap-4 mt-14">
//                     <Button title="view more" bgColor="bg-green-500" textColor="text-black" border={false} />
//                     <Button title="downlod cv" border={true} icon={<MdOutlineFileDownload />}/>
//                 </div>
//             </div>

//             <div className="  " 
//                 onMouseMove={handleMouseMove} 
//                 onMouseLeave={handleMouseLeave} >
//                 <img src={HeroImg} alt="this is hero image...." 
//                     className=" h-[561px] object-cover "
//                     style={{
//                         transform: `translate(${position.x}px, ${position.y}px)`, // Image Move করবে
//                     }} 
//                 />
//             </div>
//         </div>
//     );
// };

// export default Hero_section_one;

import { useState } from "react";
import HeroImg from "../assets/img/heroimg.png";
import Button from "./Button";
import { MdOutlineFileDownload } from "react-icons/md";

const HeroSectionOne = () => {
  // X এবং Y এর জন্য state
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Mouse Move Event Handle করা
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e; // Cursor Position
    const moveX = (clientX - window.innerWidth / 2) / 30; // X Movement (Reduced Sensitivity)
    const moveY = (clientY - window.innerHeight / 2) / 30; // Y Movement
    setPosition({ x: moveX, y: moveY });
  };

  // Mouse Leave করলে Default অবস্থায় ফিরে যাবে
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 }); // Default অবস্থায় নিয়ে আসা
  };

  return (
    <div className="flex justify-between mt-20 items-center">
      {/* Left Side Content */}
      <div className="w-[55%]">
        <h1 className="text-gray-900 text-8xl font-bold mt-32 leading-[1.1] uppercase">
          Hello I’m <br /> Limon Sheikh
        </h1>
        <p className="text-[16px] mt-8">
          A personal portfolio is a collection of your work, achievements, and
          skills that highlights your abilities and professional growth. It
          serves as...
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-14">
          <Button title="View More" bgColor="bg-green-500" textColor="text-black" border={false} />
          <Button title="Download CV" border={true} icon={<MdOutlineFileDownload />} />
        </div>
      </div>

      {/* Right Side Image with Mouse Move Effect */}
      <div
        className="w-[45%] flex justify-center items-center relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={HeroImg}
          alt="This is hero image..."
          className="h-[561px] object-cover transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(1.05)`, // Smooth movement with slight zoom
          }}
        />
      </div>
    </div>
  );
};

export default HeroSectionOne;
