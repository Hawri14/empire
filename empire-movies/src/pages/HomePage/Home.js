import React from 'react';
import { homeObjTwo } from './Data';
import { MoreInfo } from '../../components';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyle';
import { Infosec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './Data';


const Home = ({ Primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img , alt, start }) => {
    return (
        <>
            <Infosec lightBg= {lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/LOGIN'>
                                    <Button big fontBif Primary={Primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>    
                </Container>
            </Infosec>
        <MoreInfo {...homeObjTwo} />  
    </>
    );
};



export default Home;


