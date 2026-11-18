import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"
import Disclaimer from "./pages/Disclaimer.jsx";
import ReturnPolicy from "./pages/ReturnPolicy.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/return" element={<ReturnPolicy/>}/>
          <Route path="/disclaimer" element={<Disclaimer/>}/>
        </Routes>
        <Footer/>
      </Router>
  )
}
export default App