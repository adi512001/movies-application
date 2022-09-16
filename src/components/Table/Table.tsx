import React from 'react';
import TableGroup from '../TableGroup/TableGroup';
import { Wrapper, TableHeaderContainer, TableHeader, TableContent } from "./TableStyles";

const Table = () => {
  const tableHeaders = ["name", "pii", "masking", "type"];
  return (
    <Wrapper>
        <TableHeaderContainer>
            {tableHeaders.map(header => <TableHeader>{header}</TableHeader>)}
        </TableHeaderContainer>
        <TableContent>
            <TableGroup visible={false} />
        </TableContent>
    </Wrapper>
  );
}

export default Table;
