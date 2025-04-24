import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavbarLinks = () => {
  return(
    <>  
  <NavLink className='border-b-2 border-b-transparent hover:border-b-blue-500 transition-all duration-200' to='/proveedores'> Proveedores</NavLink>
  <NavLink className='border-b-2 border-b-transparent hover:border-b-blue-500 transition-all duration-200' to='/usuarios'> Usuarios</NavLink>
  <NavLink className='border-b-2 border-b-transparent hover:border-b-blue-500 transition-all duration-200' to='/clientes'> Clientes</NavLink>
  <NavLink className='border-b-2 border-b-transparent hover:border-b-red-500 transition-all duration-200' to='/logout'> Log Out</NavLink>
    </>
  )
}

const Navbar = () => {
    const [IsOpen, SetIsOpen] = useState(false);

    const toogleNavbar = () =>{
        SetIsOpen(!IsOpen)
    }
    return(
        <>
     <nav className='w-1/3 flex justify-end'>
        <div className=' w-full hidden lg:flex justify-between'>
            <NavbarLinks/>
        </div>
        <div className='lg:hidden'>
            <button onClick={toogleNavbar}>{IsOpen ? <X/> :<Menu/>}</button>
        </div>
     </nav>
     {IsOpen && (
        <div className='flex basis-full flex-col items-center'>
           <NavbarLinks/>
        </div>
     )}
     </>
    )
  }



export default Navbar;