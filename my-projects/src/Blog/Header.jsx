
import React from 'react'
import SocialMedia from './SocialMedia'
import Menu from './Menu';
const Header = () => {

    return (
        <>
       
        <div className="header disable-select">
            <div className="combo">
            <Menu />
            <h1>KDTECH</h1>
            </div>            
            <SocialMedia/>
        </div>
        </>)

}

export default Header;