import Button from "../components/Button";
import List from "../components/List";
import Logo from "../components/Logo";
import Hero_section_one from "../components/Hero_section_one";


const Home = () => {
    return (
        <div>
            <nav className="p-2 shadow-lg flex items-center justify-between mt-5">
                <Logo/> <List/> <Button/>
            </nav>
            <div>
                <Hero_section_one/>
            </div>
            
        </div>

    );
};

export default Home;