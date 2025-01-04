import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="w-11/12 m-auto">
      <Navbar />
      <Showcase id="welcome" image="showcase-develop.jpeg" />
    </div>
  );
}

export default App;
