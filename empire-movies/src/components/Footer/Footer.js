import React from 'react';
import { Button } from '../../globalStyle';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink} from './Footer.elements'; // here we just import these things from footer.elements

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
        </FooterContainer>
    );
};

export default Footer;