import Link from 'next/link'
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
  <header className='header'>
    <h1 className='logo'>Watch Mania</h1>
    <nav>
        <Link href="/" className='a'>Home</Link>
        <Link href="/about" className='a'>About</Link>
        <Link href="/watches" className='a'>Watches</Link>
        <Link href="/contact" className='a'>Contact</Link>
        <FaCartShopping style={{color:'white', fontSize:'22px'}}/>
    </nav>
  </header>
  )
}

export default Header
