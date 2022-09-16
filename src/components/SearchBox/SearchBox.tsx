import React, { useState } from 'react';
import { Container, Wrapper, Search, Input, ApplyButton, Filters, PIIFilter, PIICheckbox, Text, ResetButton } from "./SearchBoxStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
    piiOnly: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ piiOnly, handleChange }: Props) => {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
      <ResetButton>Reset Filter</ResetButton>
    </Container>
  );
}

export default SearchBox;
