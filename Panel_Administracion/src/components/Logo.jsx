import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return(
    <div className=' flex place-items-center h-16 w-16 logo'>
      <Link to='/'>
        <img src='https://img.icons8.com/plasticine/100/davinci-resolve.png'/>
        </Link>
    </div>
  )
}

export default Logo;