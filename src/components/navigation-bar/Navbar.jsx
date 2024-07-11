import React, { useState } from 'react'
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <div className='md:hidden flex items-center'>
                        <GiHamburgerMenu className='ham' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                    </div>

                    <div className='logo'>
                        Travlog
                    </div>

                    <div className='hidden md:flex space-x-10'>
                        <a href="/" className="navlink">Home</a>
                        <a href="/" className="navlink">Discover</a>
                        <a href="/" className="navlink">Special Deals</a>
                        <a href="/" className="navlink">Contact</a>
                    </div>

                    <div className='hidden sm:flex space-x-3'>
                        <button className='btn-login'>LOGIN</button>
                        <button className='btn-signup'>SIGNUP</button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className='flex flex-col space-y-6 mb-2 md:hidden'>
                        <a href="/" className="navlink">Home</a>
                        <a href="/" className="navlink">Discover</a>
                        <a href="/" className="navlink">Special Deals</a>
                        <a href="/" className="navlink">Contact</a>
                        <div className='flex flex-col space-y-3 sm:hidden'>
                            <button className='btn-login'>login</button>
                            <button className='btn-signup'>signup</button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar