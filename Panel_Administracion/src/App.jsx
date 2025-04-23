// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/home';


export default function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/home" element={<Home/>} />
      {/* <Route path="/logout" element={<Login />} />
      <Route path="/clientes" element={<Login />} />
      <Route path="/proveedor" element={<Login />} />
      <Route path="/usuarios" element={<Login />} /> */}

      {/* Rutas protegidas
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Ruta 404 opcional */}
      {/* <Route path="*" element={<div>404 - Página no encontrada</div>} />  */}
    </Routes>
  );
}
