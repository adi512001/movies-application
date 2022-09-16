import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import { Wrapper } from "./RouteDetailsStyles";
import data from '../../data/fe_data.json';
import SearchBox from '../../components/SearchBox/SearchBox';

const RouteDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [piiOnly, setPiiOnly] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPiiOnly(event.target.checked);
  };
  return (
    <Wrapper>
        <Header 
          method={data.method} 
          path={data.path} 
          apiName={data.api} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SearchBox piiOnly={piiOnly} handleChange={handleChange} />
        <Table
          
        />
    </Wrapper>
  );
}

export default RouteDetails;
