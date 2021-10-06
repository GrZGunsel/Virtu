import "./App.scss";
import About from "./Component/Home/About/About";
import Home from "./Component/Home/Home";
import Service from "./Component/Home/Service/Service";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Service />
    </div>
  );
}

export default App;
