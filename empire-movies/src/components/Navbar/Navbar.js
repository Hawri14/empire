import React, {useState} from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import { IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements';


const Navbar = () => {
    const[click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

          /* makes the logo change colour and the mobile popdown menu*/
    return (
      <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    EMPIRE
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick}>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        </NavMenu>
                        <NavMenu onClick={handleClick}>
                    <NavItem>
                        <NavLinks to='/Movies'>Movies</NavLinks>
                        </NavItem>
                        </NavMenu>
                        <NavMenu onClick={handleClick}>
                    <NavItem>
                        <NavLinks to='/AboutUs'>AboutUs</NavLinks>
                        </NavItem>
                        </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    );
};

export default Navbar;
