
import Navber from "./components/Navigationbar/Navber";
import Hero_section_one from "./components/Hero_section_one";
import About from "./Pages/About";
import CustomCursor from "./components/CustomCursor";

// import Test from "./components/Test"


import './App.css'

const App = () => {
  return (
    <div>
      <CustomCursor />
      <header>
          <Navber/>
      </header>


      <main className="container mx-auto ">
        <Hero_section_one/>
        <About/>
      </main>
        {/* <Test/> */}

      <footer className="container mx-auto ">

      </footer>

    </div>
  );
};

export default App;
