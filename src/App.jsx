import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hearder from "./component/Hearder";
import QuienSoy from "./component/QuienSoy";
import Project from "./component/Project";
import Expert from "./component/Expert";
import Experiencias from "./component/Experiencias";
import Footer from "./component/Footer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Hearder />
      <Routes>
        <Route path="/" element={<QuienSoy />} />
        <Route path="/proyectos" element={<Project />} />
        <Route path="/experticia" element={<Expert />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/contacto" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
