import React, { useState } from 'react';
import { Container, Wrapper, Search, Input, ApplyButton, Filters, PIIFilter, PIICheckbox, Text, ResetButton } from "./SearchBoxStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
    piiOnly: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onApplyClick: (searchVal: any) => void;
}

const SearchBox = ({ piiOnly, handleChange, onApplyClick }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target?.value);
  }
  return (
    <Container>
      <Wrapper>
          <Search>
              <FontAwesomeIcon icon={faSearch} color="#676767" />
              <Input placeholder='Search' value={searchValue} onChange={onSearchChange} />
          </Search>
          <Filters>
              <PIIFilter>
                <PIICheckbox checked={piiOnly} onChange={handleChange} sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />
                <Text>Show PII only</Text>
              </PIIFilter>
              <ApplyButton onClick={() => onApplyClick(searchValue)}>Apply</ApplyButton>
          </Filters>
      </Wrapper>
      <ResetButton>Reset Filter</ResetButton>
    </Container>
  );
}

export default SearchBox;
