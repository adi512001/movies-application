import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import { Wrapper, SearchBox, Search, Input } from "./RouteDetailsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import data from '../../data/fe_data.json';

const RouteDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
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
        </SearchBox>
    </Wrapper>
  );
}

export default RouteDetails;
