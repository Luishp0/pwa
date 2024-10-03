import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/inicio.jsx';
import Login from './components/login.jsx'
import Registro from './components/registro.jsx'
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/login' Component={Login}/>
        <Route path='/registro' Component={Registro}/>
        <Route path='/' Component={Inicio}/>
        <Route path='/navbar' Component={Navbar}/>
    
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
