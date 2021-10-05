import "./App.scss";
import About from "./Component/Home/About";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <Navbar />
          <Home />
        </div>
      </div>

      <About />
    </div>
  );
}

export default App;
