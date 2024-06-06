import React from 'react';
import { Icon } from '../../commponents/icon/Icon';
import styled from 'styled-components';
import photo from './../../assets/images/Photo.png';
import { FlexWrapper } from '../../commponents/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justyfy={"space-around"}>
                <StyledText>
                    <MainTitle>
                        Hi, I am Your Name<br/>
                        A Product Designer<br/> 
                        based in City.
                    </MainTitle>
                    <MainText >
                        I help businesses and companies reach<br/> 
                        their goals by designing user-centric digital<br/> 
                        products & interactive experiences.<br/>
                    </MainText>
                    <StyledButton>
                        <Icon  iconId={'message'} /> hi@yourname.com
                    </StyledButton> 
                </StyledText>
                    <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>    
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #b549dc;
`
const StyledText = styled.div`

`

const MainTitle = styled.h1`

`
const MainText = styled.p`
    
`
const StyledButton = styled.button`
    
`
const Photo = styled.img`
    width: 376px;
    height: 400px;
    object-fit: cover;
`

