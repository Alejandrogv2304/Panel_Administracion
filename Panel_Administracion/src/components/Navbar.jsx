import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const NavbarLinks = () => {
  return(
    <>
    <NavLink to='/proveedores'> Proveedores</NavLink>
    <NavLink to='/usuarios'> Usuarios</NavLink>
    <NavLink to='/clientes'> Clientes</NavLink>
    </>
  )
}

const Nav = () => {
    const [IsOpen, SetIsOpen] = useState(false);

    const toogleNavbar = () =>{
        SetIsOpen(!IsOpen)
    }
    return(
     <Nav classname='w-1/3'>
        <div className=' hidden md:flex justify-between'>
            <NavbarLinks/>
        </div>
        <div className='md:hidden'>
            <button onClick={toogleNavbar}>{IsOpen ? <X/> :<Menu/>}</button>
        </div>
     </Nav>
    )
  }



export default Nav;