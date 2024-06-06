import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../commponents/logo/Logo';
import { Menu } from '../../commponents/menu/Menu';


export const Header = () => {
    return (
        <StyledHeader >
          <Logo />
          <Menu />  
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
   background-color: #5ae1d1;
   display: flex;
   justify-content: space-between;
   align-items: center;
`