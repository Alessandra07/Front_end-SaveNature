import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import SobreNos from './paginas/sobreNos/SobreNos';
import Contato from './paginas/contato/Contato';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
;


function App() {
  return (
    <Router>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobrenos" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          </Routes>
        </div>
        <Footer />  
    </Router > 
  );
}
 
export default App;