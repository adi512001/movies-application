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
  const [initialTabData, setInitialTabData] = useState<{
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
      setInitialTabData(data?.request);
      return setTabData(data?.request);
    }
    setInitialTabData(data?.response);
    setTabData(data?.response);
  }, [activeTab])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPiiOnly(event.target.checked);
  };

  const onApplyClick = (searchVal: string) => {
    let filteredTabData = { ...initialTabData };
    let group: keyof typeof tabData;
    for (group in initialTabData) {
      let filteredArray = initialTabData[group]?.filter(row => {
        let searchFilter = true;
        let piiFilter = true;
        if (searchVal !== "") {
          searchFilter = row.name?.toLowerCase().includes(searchVal.toLowerCase()) || 
          row.type?.toLowerCase().includes(searchVal.toLowerCase());
        }
        if (piiOnly) {
          piiFilter = Boolean(row.pii);
        }
        return searchFilter && piiFilter;
      });
      filteredTabData[group] = filteredArray;
    }
    setTabData(filteredTabData);
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
        <SearchBox piiOnly={piiOnly} handleChange={handleChange} onApplyClick={searchVal => onApplyClick(searchVal)} />
        <Table
          tabData={tabData}
        />
    </Wrapper>
  );
}

export default RouteDetails;
