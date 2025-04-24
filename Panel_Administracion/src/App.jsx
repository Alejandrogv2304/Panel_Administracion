// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/home';
import Clientes from './pages/clientes';
import Proveedores from './pages/proveedores';
import Usuarios from './pages/usuarios';
import LogOut from './pages/logout';


export default function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Clientes/>} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/logout" element={<LogOut />} />
     
    </Routes>
  );
}
