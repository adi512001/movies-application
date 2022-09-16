import React from 'react';
import { Wrapper, TableHeader } from "./TableStyles";

const Table = () => {
  
  return (
    <Wrapper>
        <TableHeader>
            <span>Name</span>
            <span>pii</span>
            <span>masking</span>
            <span>type</span>
        </TableHeader>
    </Wrapper>
  );
}

export default Table;
