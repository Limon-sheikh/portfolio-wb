
import Navber from "./components/Navigationbar/Navber";
import HeroSection from "./components/HeroSection";
import About from "./Pages/About";
import CustomCursor from "./components/CustomCursor";

// import Test from "./components/Test"


import './App.css'
import Services from "./Pages/Services";
// import Counter from "./components/CustomHooks/Counter";

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
        {/* <Counter/> */}
      </main>
        {/* <Test/> */}

      <footer className="container mx-auto ">

      </footer>

    </div>
  );
};

export default App;
