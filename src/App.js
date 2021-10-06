import "./App.scss";
import About from "./Component/Home/About/About";
import Client from "./Component/Home/Client/Client";
import Home from "./Component/Home/Home";
import Service from "./Component/Home/Service/Service";
import VisionPage from "./Component/Home/Vision/VisionPage";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <VisionPage />
      <Client />
    </div>
  );
}

export default App;
