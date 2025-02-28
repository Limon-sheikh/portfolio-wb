
import Navbar from "./components/Naverbar";

const App = () => {
  return (
    <div className="container mx-auto bg-red-200">
        <Navbar />
        <main className="text-center mt-10">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
        </main>
    </div>
  );
};

export default App;
