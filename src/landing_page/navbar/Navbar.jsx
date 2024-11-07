import React, { useRef, useState } from 'react'
import logo from '../../assets/Logo/logo.png'
import x from '../../assets/Mobile_view/x.svg'
import menu_mob from '../../assets/Mobile_view/menu.svg'
import'./Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Navbar() {

  const [menu, setMenu] = useState('home')
  const menuRef =useRef();

  const openMenu = () => {
    menuRef.current.style.right='0';
  }
  const closeMenu = () => {
    menuRef.current.style.right='-350px';
  }

  return (
    <div className='navbar'>
       <AnchorLink className='achore-link'  href='#home'> <img className='logo' src={logo} alt="Logo" /> </AnchorLink>
        <img src={menu} alt="" />
        <img className='nav-mob-open' onClick={openMenu}  src={menu_mob} alt="menu" />
        <ul ref={menuRef} className='nav-menu'>
          <img className='nav-mob-close' onClick={closeMenu} src={x} alt="x" />
            <li> <AnchorLink className='achore-link' href='#home'> <p  onClick={() => setMenu('home')}> Home </p></AnchorLink></li>
            <li> <AnchorLink className='achore-link' offset={50} href='#about'> <p onClick={() => setMenu('about')}> About </p></AnchorLink></li>
            <li> <AnchorLink className='achore-link' offset={50} href='#services'> <p onClick={() => setMenu('services')}> Services </p></AnchorLink></li>
            <li> <AnchorLink className='achore-link' offset={50} href='#work'> <p onClick={() => setMenu('work')}> Projects </p></AnchorLink></li>
            <li> <AnchorLink className='achore-link' offset={50} href='#contect'> <p onClick={() => setMenu('contect')}> Contect </p></AnchorLink></li>
        </ul>
    </div>
  )
}

export default Navbar