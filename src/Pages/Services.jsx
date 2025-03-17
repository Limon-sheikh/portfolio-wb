import Card from "../components/Card";
import { FaLaptopCode } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";


const Services = () => {
    return (
        <section className="container mx-auto bg-[#f3f4f7]">
            <div className="grid gap-12 text-gray-800 bg-orange-400">
                <div className="font-bold text-center">
                    <h3 className="text-xl uppercase">my services</h3>
                    <h2 className="text-6xl leading-[1.1] mt-6">Elevate personal brand our <br/> stunning portfolio</h2>
                </div>
                <div className="grid grid-cols-4 gap-4 gap-y-6 justify-items-center">
                    <Card 
                        title="front-end web development" 
                        details="I build modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React.js. Clean code, fast performance, and seamless user experience are my priorities."
                        icon={<FaLaptopCode />}
                    /><Card 
                        title="wordPress development" 
                        details="I create custom WordPress websites with optimized speed, security, and easy management. From theme customization to plugin integration, I deliver tailored solutions."
                        icon={<FaWordpressSimple />}
                    /><Card 
                        title="UI/UX design" 
                        details="I design intuitive and visually appealing user interfaces using Figma and Adobe XD. My focus is on user experience, functionality, and aesthetic appeal."
                        icon={<FaFigma/>}
                    /><Card 
                        title="UI/UX design" 
                        details="I design intuitive and visually appealing user interfaces using Figma and Adobe XD. My focus is on user experience, functionality, and aesthetic appeal."
                        icon={<FaFigma/>}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;