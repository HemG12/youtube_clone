import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import Search  from '../../assets/search.png';
import uplod from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/jack.png'
import { Link } from 'react-router-dom';

const Navbar=({setSidebar})=> {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu'onClick={()=>setSidebar(prev => prev===false?true:false)} src={menu_icon} alt="" />
              <Link to='/'><img className='logo' src={logo} alt="" /></Link> 
            </div>


            <div className='nav-mid flex-div'>
                <div className='search-box flex-div'>
                <input type="text" placeholder="Search" />
                <img src={Search} alt="" />
                </div>

            </div>

            <div className='nav-right flex-div'>
                <img src={uplod} alt="" />
                <img src={more} alt="" />
                <img src={notification} alt="" />
                <img src={profile} className='user_icon' alt="" />

            </div>

        </nav>
    )
}

export default Navbar