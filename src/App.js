import "./App.scss";
import About from "./Component/Home/About/About";
import Client from "./Component/Home/Client/Client";
import Contact from "./Component/Home/Contact/Contact";
import Feedback from "./Component/Home/Feedbacks/Feedback";
import Footer from "./Component/Home/Footer/Footer";
import Home from "./Component/Home/Home";
import Service from "./Component/Home/Service/Service";
import VisionPage from "./Component/Home/Vision/VisionPage";
import Whyus from "./Component/Home/Whyus/Whyus";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <VisionPage />
      <Client />
      <Whyus />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
