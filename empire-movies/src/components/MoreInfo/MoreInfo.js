import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyle';
import { Infosec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle} from './MoreInfo.elements';


const MoreInfo = ({ Primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText,topLine }) => {
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
                    </InfoRow>    
                </Container>
            </Infosec>
        </>
    );
};

export default MoreInfo;
