import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaCategoria from './components/categoria/listacategoria/ListaCategoria';
import ListaProduto from './components/produto/listaproduto/ListaProduto';
import CadastroProduto from './components/produto/cadastroProduto/CadastroProduto';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SobreNos from './paginas/sobreNos/SobreNos';
import Contato from './paginas/contato/Contato';
import Vitrine from './paginas/vitrine/Vitrine';



function App() {
  return (
    <Provider store={store}>
      <ToastContainer />

      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Vitrine />} />
            <Route path="/sobreNos" element={<SobreNos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/produto" element={<ListaProduto />} />
            <Route path="/formularioProduto" element={<CadastroProduto />} />
            <Route path="/formularioProduto/:id" element={<CadastroProduto />} />
            <Route path="/formularioCategoria" element={<CadastroCategoria />} />
            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          </Routes>
        </div>
        <Footer />
      </Router >
    </Provider>
  )
}

export default App;