import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import { Wrapper, SearchBox, Search, Input, ApplyButton, Filters, PIIFilter, PIICheckbox, Text } from "./RouteDetailsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import data from '../../data/fe_data.json';

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
        <SearchBox>
          <Search>
            <FontAwesomeIcon icon={faSearch} color="#676767" />
            <Input placeholder='Search'/>
          </Search>
          <Filters>
            <PIIFilter>
              <PIICheckbox checked={piiOnly} onChange={handleChange} sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />
              <Text>Show PII only</Text>
            </PIIFilter>
            <ApplyButton>Apply</ApplyButton>
          </Filters>
        </SearchBox>
    </Wrapper>
  );
}

export default RouteDetails;
