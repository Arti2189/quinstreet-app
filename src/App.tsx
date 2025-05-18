import React, { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { styled } from '@linaria/react';
import logo from './assets/logo.svg';
import { Advetorial } from './components/Advetorial/Advetorial';
import { COLOR } from './utils';

interface AppContainerProps {
  bgColor: string;
}

const AppContainer = styled.div<AppContainerProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  --quinstreet-bg-transition: background-color 5s ease;
  transition: var(--quinstreet-bg-transition);
  --quinstreet-bg-color: ${props => props.bgColor};
  background-color: var(--quinstreet-bg-color);
`;

const Header = styled.header`
  width: 100%;
  background-color: ${COLOR.GREY_500};
  padding: 1rem 0;
  text-align: center;
  position: sticky;
  top: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-top: 1.5rem;
`;

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>(COLOR.BG_PRIMARY);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(prevColor => 
        prevColor === COLOR.BG_PRIMARY ? COLOR.BG_SECONDARY : COLOR.BG_PRIMARY
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <AppContainer bgColor={bgColor}>
      <Header>
        <img src={logo} alt="modernize logo" />
      </Header>
      <ContentWrapper>
        <Form />
        <Advetorial />
      </ContentWrapper>
    </AppContainer>
  );
};

export default App;