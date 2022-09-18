import React, { useState } from 'react';
import { Container, Wrapper, Search, Input, ApplyButton, Filters, PIIFilter, PIICheckbox, Text, ResetButton } from "./SearchBoxStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
    piiOnly: boolean;
    setPiiOnly: React.Dispatch<React.SetStateAction<boolean>>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onApplyClick: (searchVal: string, onReset: boolean) => void;
}

const SearchBox = ({ piiOnly, setPiiOnly, handleChange, onApplyClick }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target?.value);
  }

  const onResetClick = () => {
    setSearchValue("");
    setPiiOnly(false);
    onApplyClick("", true);
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
                <PIICheckbox 
                  checked={piiOnly} 
                  onChange={handleChange} 
                  sx={{ 
                    '& .MuiSvgIcon-root': { fontSize: 18 },
                   "&:hover": { backgroundColor: "#7b1fa20a" },
                   "& .MuiSvgIcon-root Mui-checked": { color: "#6A1B9A" }
                  }} 
                />
                <Text>Show PII only</Text>
              </PIIFilter>
              <ApplyButton onClick={() => onApplyClick(searchValue, false)}>Apply</ApplyButton>
          </Filters>
      </Wrapper>
      <ResetButton onClick={onResetClick}>Reset Filter</ResetButton>
    </Container>
  );
}

export default SearchBox;
