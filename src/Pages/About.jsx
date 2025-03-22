// import { useState } from "react";
import Button from "../components/Button";
import HeroImagOne from "../assets/img/One.jpeg";
import HeroImagTow from "../assets/img/Tow.jpg";
import { IoCheckmarkOutline } from "react-icons/io5";
import { TbArrowWaveRightDown } from "react-icons/tb";
import Counter from "../components/Counter"


const About = () => {

    // const [person] = useState({
    //     name: 'limon sheikh',
    //     age: 30,
    //     job: 'Web Developer',
    //   });

    const endPoint = 20;
    const intervalSpeed = 80;
    const text = "Hi there! I’m Limon sheikh, a passionate Front-end Web Developer, WordPress Developer, and UI/UX Designer. With a strong foundation in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I specialize in building modern, responsive, and user-friendly websites. ";

    return (
        <section className="bg-[#f3f4f7] flex justify-between rounded-tl-3xl rounded-tr-3xl pt-28 pl-6 pr-6 pb-40 ">
            <div className="w-[50%] text-gray-800">
                <div className="flex items-center gap-2">
                    <h3 className="uppercase text-xl font-bold inline-block ">about me</h3><TbArrowWaveRightDown className=" text-4xl"/>
                </div>
                <h2 className="text-6xl font-bold mt-6 leading-[1.1]">A Glimpse Into My Journey as a Web Developer</h2>
                <p className="mt-6 text-justify">{text}</p>
                <div className="mt-7 mb-7 grid grid-flow-col grid-rows-3 gap-3 capitalize">
                    <div className="flex items-center gap-2 ">
                        <IoCheckmarkOutline className="text-gray-800 text-xl" />
                        <h3> Front-end Web Development (React.js, Tailwind CSS)</h3>
                    </div><div className="flex items-center gap-2">
                        <IoCheckmarkOutline className="text-gray-800 text-xl"/>
                        <h3>WordPress Website Development & Customization</h3>
                    </div><div className="flex items-center gap-2">
                        <IoCheckmarkOutline className="text-gray-800 text-xl" />
                        <h3>UI/UX Design (Wireframing & Prototyping)</h3>
                    </div>
                </div>
                <Button title="read more" bgColor="bg-green-500"/>
            </div>

            <div className="bg-[#f3f4f7] flex justify-evenly w-[50%] relative">
                <div className="absolute top-[-50px] left-10 rounded-2xl">
                    <img src={HeroImagOne} alt="study image" className="w-64 h-96 rounded-xl" />
                </div>
                <div className="w-64 h-36 p-5 bg-white shadow-lg absolute top-[100%] left-10 transform translate-y-[-100%] 
                    flex justify-between items-center box-border rounded-2xl ">
                    <div className="w-20 text-center text-gray-800 font-bold text-7xl">
                        <Counter endPoint={endPoint} intervalSpeed = {intervalSpeed} />
                    </div>
                    <h3 className="w-28 font-bold inline-block text-gray-800 text-xl">Years Of experience</h3>
                </div>
                <div className="bg-[#f3f4f7] absolute top-12 right-8 rounded-2xl ">
                    <img src={HeroImagTow} alt="study image" className="w-60 h-96 rounded-2xl" />
                </div>
            </div>

        </section>
    );
};

export default About;