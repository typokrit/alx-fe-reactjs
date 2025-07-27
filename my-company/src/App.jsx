import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  // Use a flex column layout for footer positioning
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const contentStyle = {
    flex: "1 0 auto",
  };

  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Navbar />
        <main style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
