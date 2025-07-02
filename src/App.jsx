import {BrowserRouter, Route, Routes} from 'react-route-dom';
import Hearder from './component/Hearder';
import QuienSoy from './component/QuienSoy';
import Project from './component/Project';
import Expert from './component/Expert';
import Footer from './component/Footer';
import Experiencias from './component/Experiencias';
import './App.css'

function App() {
  return (
    <BrowserRouter>
     <Hearder />
    <Route>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<QuienSoy />} />
        <Route path="/proyectos" element={<Project />} />
        <Route path="/experticia" element={<Expert />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/contacto" element={<Footer />} />
    
    </Route>
    </BrowserRouter>

    
  );
}

export default App;
