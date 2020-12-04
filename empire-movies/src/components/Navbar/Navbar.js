import React, {useState, useEffect} from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import { IconContext} from 'react-icons/lib'
import { Button } from '../../globalStyle';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

          /* makes the logo change colour and the mobile popdown menu*/
    return (
      <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    EMPIRE MOVIES
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>

                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        
                    <NavItem>
                        <NavLinks to='/Movies'>Movies</NavLinks>
                        </NavItem>

                    <NavItem>
                        <NavLinks to='/AboutUs'>About Us</NavLinks>
                        </NavItem>

                        <NavItemBtn>
                            {Button ? (
                                <NavBtnLink to="/Login">
                                    <Button primary>LOGIN</Button>
                                    </NavBtnLink>
                                    ) : (
                                    <NavBtnLink to="/Login">
                                        <Button fontBig primary>
                                            Login
                                        </Button>
                                    </NavBtnLink>
                            )}
                        </NavItemBtn>
                        <NavItemBtn>
                            {Button ? (
                                <NavBtnLink to="/Signup">
                                    <Button primary>Sign-up</Button>
                                    </NavBtnLink>
                                    ) : (
                                    <NavBtnLink to="/Signup">
                                        <Button fontBig primary>
                                            Sign-up
                                        </Button>
                                    </NavBtnLink>
                            )}
                        </NavItemBtn>
                        </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    );
};

export default Navbar;
