import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-11/12 m-auto">
        <Showcase id="welcome" image="showcase-develop.jpeg" />
      </div>
    </>
  );
}

export default App;
