import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
