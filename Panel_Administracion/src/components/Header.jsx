import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return(
    <header className='dark:text-white text-black font-serif text-xl bg-white dark:bg-gray-800 sticky top-0 z-[20] flex-wrap mx-auto flex w-full items-center justify-between  border-gray-200 pr-8 pl-8'>
      <Logo/>
      <Navbar/>
    </header>
  )
}

export default Header;