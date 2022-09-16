import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import { Wrapper } from "./RouteDetailsStyles";
import data from '../../data/fe_data.json';
import SearchBox from '../../components/SearchBox/SearchBox';

export type TableRow = {
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
}
const RouteDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [piiOnly, setPiiOnly] = useState(false);
  const [tabData, setTabData] = useState<{
    body: TableRow[];
    headers: TableRow[];
    queryParams: TableRow[];
    urlParams: TableRow[];
} | 
{
  body: TableRow[];
  headers: TableRow[];
}>({
    body: [],
    headers: [],
    queryParams: [],
    urlParams: [],
  });

  useEffect(() => {
    if (activeTab === 0) {
      return setTabData(data?.request);
    }
    setTabData(data?.response);
  }, [activeTab])

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
          tabData={tabData}
        />
    </Wrapper>
  );
}

export default RouteDetails;
