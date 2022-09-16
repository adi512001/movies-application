import React from 'react';
import { Wrapper, TableHeaderContainer, TableHeader } from "./TableStyles";

const Table = () => {
  const tableHeaders = ["name", "pii", "masking", "type"];
  return (
    <Wrapper>
        <TableHeaderContainer>
            {tableHeaders.map(header => <TableHeader>{header}</TableHeader>)}
        </TableHeaderContainer>
    </Wrapper>
  );
}

export default Table;
