import React, { useState } from 'react';
import { Wrapper, Search, Icon, Input } from "./SearchBoxStyles";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  search: (searchVal: string) => void
}

const SearchBox = ({ search }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target?.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if (e.key === 'Enter') {
      search(searchValue?.toLowerCase());
    }
  };

  return (
    <Wrapper>
        <Search>
          <Icon icon={faSearch} onClick={() => search(searchValue?.toLowerCase())} />
          <Input placeholder='Search' value={searchValue} onChange={onSearchValChange} onKeyDown={handleKeyDown} />
        </Search>
    </Wrapper>
  );
}

export default SearchBox;
