import Button from "../components/Button";
import HeroImagOne from "../assets/img/One.jpeg";
import HeroImagTow from "../assets/img/Tow.jpg";
import { IoCheckmarkOutline } from "react-icons/io5";
import { TbArrowWaveRightDown } from "react-icons/tb";


const About = () => {

    return (
        <section className="bg-[#f3f4f7] flex justify-between rounded-tl-3xl rounded-tr-3xl pt-28 pl-6 pr-6 pb-40 ">
            <div className="w-[50%] text-gray-800">
                <div className="flex items-center gap-2">
                    <h3 className="uppercase text-xl font-bold inline-block ">about me</h3><TbArrowWaveRightDown className=" text-4xl"/>
                </div>
                <h2 className="text-6xl font-bold mt-6 leading-[1.1]">Story captivating visuals portfolio</h2>
                <p className="mt-6 text-justify">A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as a showcase to a present your talents and attract potential employers or clients</p>
                <div className="mt-7 mb-7 grid grid-flow-col grid-rows-3 gap-3 capitalize">
                    <div className="flex items-center gap-2 ">
                        <IoCheckmarkOutline className="text-gray-800 text-xl" />
                        <h3>mistakes to avoid</h3>
                    </div><div className="flex items-center gap-2">
                        <IoCheckmarkOutline className="text-gray-800 text-xl" />
                        <h3>your startup</h3>
                    </div><div className="flex items-center gap-2">
                        <IoCheckmarkOutline className="text-gray-800 text-xl" />
                        <h3>knew about fonts</h3>
                    </div><div className="flex items-center gap-2">
                        <IoCheckmarkOutline className="text-gray-800 text-xl" />
                        <h3>outside the box</h3>
                    </div><div className="flex items-center gap-2">
                        <IoCheckmarkOutline className="text-gray-800 text-xl" />
                        <h3>create destiny</h3>
                    </div><div className="flex items-center gap-2">
                        <IoCheckmarkOutline className="text-gray-800 text-xl" />
                        <h3>dare different</h3>
                    </div>
                </div>
                <Button title="read more" bgColor="bg-green-500"/>
            </div>

            <div className="bg-[#f3f4f7] flex justify-evenly w-[50%] relative">
                <div className="absolute top-[-50px] left-10 rounded-2xl">
                    <img src={HeroImagOne} alt="" className="w-64 h-96 rounded-xl" />
                </div>
                <div className="bg-green-300 absolute top-[100%] left-10 transform translate-y-[-100%] flex justify-center items-center w-64 h-32 rounded-2xl ">
                    <h3>Years Of experience</h3>
                    
                </div>
                <div className="bg-[#f3f4f7] absolute top-12 right-8 rounded-2xl ">
                    <img src={HeroImagTow} alt="" className="w-60 h-96 rounded-2xl" />
                </div>
            </div>

        </section>
    );
};

export default About;