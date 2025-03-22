
import Navber from "./components/Navigationbar/Navber";
import HeroSection from "./components/HeroSection";
import About from "./Pages/About";
import CustomCursor from "./components/CustomCursor";
import Services from "./Pages/Services";

import Test from "./components/Test"

import './App.css'

const App = () => {
  return (
    <div>
      <CustomCursor/>
      <header>
          <Navber/>
      </header>

      <main className="container mx-auto">
        <HeroSection/>
        <About/>
        <Services/>
      </main>
        <Test/>

      <footer className="container mx-auto ">

      </footer>

    </div>
  );
};

export default App;
