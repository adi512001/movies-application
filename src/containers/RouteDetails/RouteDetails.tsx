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

  const onApplyClick = (searchVal: string) => {
    let filteredTabData = { ...tabData };
    let group: keyof typeof tabData;
    for (group in tabData) {
      let filteredArray = tabData[group]?.filter(row => {
        let shouldFilter = true;
        if (searchVal !== "") {
          if (row.name?.includes(searchVal) || row.type?.includes(searchVal)) {
            shouldFilter = true;
          } else {
            shouldFilter = false;
          }
        }
        if (piiOnly) {
          if (row.pii) {
            shouldFilter = true;
          } else {
            shouldFilter = false;
          }
        }
        return shouldFilter;
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
