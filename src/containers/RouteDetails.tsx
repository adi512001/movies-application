import React, { useState } from 'react';
import Header from "../components/Header/Header";
import data from '../data/fe_data.json';

const RouteDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
        <Header 
          method={data.method} 
          path={data.path} 
          apiName={data.api} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
    </>
  );
}

export default RouteDetails;
