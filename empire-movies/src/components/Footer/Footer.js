import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMagento } from 'react-icons/fa';
import { Button } from '../../globalStyle';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon} from './Footer.elements'; // here we just import these things from footer.elements

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our memebership 
                </FooterSubHeading>
                <FooterSubText> You can leave at any time. </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" /> 
                        <Button fontBig>Sign up</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Hlkajshdf</FooterLink>
                        <FooterLink to='/'>How it wosadfasdfrks</FooterLink>
                        <FooterLink to='/'>How itasdfasdf works</FooterLink>
                        <FooterLink to='/'>Howasdfasfdsadf it works</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact US</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Hlkajshdf</FooterLink>
                        <FooterLink to='/'>How it wosadfasdfrks</FooterLink>
                        <FooterLink to='/'>How itasdfasdf works</FooterLink>
                        <FooterLink to='/'>Howasdfasfdsadf it works</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Movies</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Hlkajshdf</FooterLink>
                        <FooterLink to='/'>How it wosadfasdfrks</FooterLink>
                        <FooterLink to='/'>How itasdfasdf works</FooterLink>
                        <FooterLink to='/'>Howasdfasfdsadf it works</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Hlkajshdf</FooterLink>
                        <FooterLink to='/'>How it wosadfasdfrks</FooterLink>
                        <FooterLink to='/'>How itasdfasdf works</FooterLink>
                        <FooterLink to='/'>Howasdfasfdsadf it works</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        EMPIRE MOVIES
                    </SocialLogo>
                    <WebsiteRights>
                        EMPIRE MOVIES 2020
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink herf= '/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink herf= '/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink herf= '/' target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink herf= '/' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;