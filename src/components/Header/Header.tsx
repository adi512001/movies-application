import React, { useState } from 'react';
import { Container, Title, Method, Path, Subtitle, SubtitleText, Seperator, HeaderTabs, HeaderTab } from "./HeaderStyles";


interface Props {
    method: string;
    path: string;
    apiName: string;
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ( { method, path, apiName, activeTab, setActiveTab }: Props ) => {

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  return (
    <Container>
       <Title>
        <Method>{method}</Method>
        <Path>{path}</Path>
       </Title>
       <Subtitle>
        <SubtitleText bold>{`All APIs > `}</SubtitleText>
        <SubtitleText bold>{`${apiName} > `}</SubtitleText>
        <SubtitleText bold={false}>{path?.slice(1)}</SubtitleText>
       </Subtitle>
       <Seperator />
        <HeaderTabs 
          value={activeTab} 
          onChange={handleChange} 
        >
          <HeaderTab label="Request" />
          <HeaderTab label="Response" />
        </HeaderTabs>
    </Container>
  );
}

export default Header;
