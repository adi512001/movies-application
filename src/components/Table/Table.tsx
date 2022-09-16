import React from 'react';
import TableGroup from '../TableGroup/TableGroup';
import { TableRow } from '../../containers/RouteDetails/RouteDetails';
import { Wrapper, TableHeaderContainer, TableHeader, TableContent } from "./TableStyles";

type RequestData = {
    body: TableRow[];
    headers: TableRow[];
    queryParams: TableRow[];
    urlParams: TableRow[];
}

type ResponseData = {
    body: TableRow[];
    headers: TableRow[];
}

interface Props {
    tabData: RequestData | ResponseData
}

const Table = ({ tabData }: Props) => {
  const tableHeaders = ["name", "pii", "masking", "type"];
  return (
    <Wrapper>
        <TableHeaderContainer>
            {tableHeaders.map(header => <TableHeader key={header}>{header}</TableHeader>)}
        </TableHeaderContainer>
        <TableContent>
            {Object.keys(tabData).map(group => <TableGroup key={group} title={group} rows={tabData[group as keyof ResponseData]} />)}
        </TableContent>
    </Wrapper>
  );
}

export default Table;
