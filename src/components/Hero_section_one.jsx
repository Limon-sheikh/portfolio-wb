
import HeroImg from "../assets/img/heroimg.png"

const Hero_section_one = () => {
    return (
        <div>
            <div className="flex justify-between mt-20 bg-orange-300">
                <div className="w-[800px]">
                    <h1 className="text-8xl font-bold mt-36">hello i’m limon sheikh</h1>
                    <p className="text-[18px] mt-10">A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as</p>
                </div>
                <div className="bg-green-500">
                    <img src={HeroImg} alt="this is hero image...." className="h-[100%] object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Hero_section_one;