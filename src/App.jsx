import Logo from "./components/Logo";
import List from "./components/List";
import Button from "./components/Button";
import Hero_section_one from "./components/Hero_section_one";

import './App.css'

const App = () => {
  return (
    <div className="container mx-auto ">

      <header>
        <nav className="p-2 shadow-lg flex items-center justify-between mt-5">
          <Logo/>
          <List/>
          <Button title="contact us" border={true}/>
        </nav>
      </header>


      <main>
        <Hero_section_one/>
      </main>


      <footer></footer>

    </div>
  );
};

export default App;
