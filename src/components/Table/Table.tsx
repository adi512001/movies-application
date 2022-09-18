import React from 'react';
import TableGroup from '../TableGroup/TableGroup';
import { TableRow } from '../../containers/RouteDetails/RouteDetails';
import { Wrapper, TableHeaderContainer, TableHeader, TableContent } from "./TableStyles";

export type RequestData = {
    body: TableRow[];
    headers: TableRow[];
    queryParams: TableRow[];
    urlParams: TableRow[];
}

export type ResponseData = {
    body: TableRow[];
    headers: TableRow[];
}

interface Props {
    tabData: RequestData | ResponseData;
    setTabData: React.Dispatch<React.SetStateAction<{
      body: TableRow[];
      headers: TableRow[];
      queryParams: TableRow[];
      urlParams: TableRow[];
  } | {
      body: TableRow[];
      headers: TableRow[];
  }>>
}

const Table = ({ tabData, setTabData }: Props) => {
  const tableHeaders = ["name", "pii", "masking", "type"];
  const groupTitles = {
    urlParams: "URL Parameters",
    queryParams: "Query Parameters",
  }
  const getGroupTitle = (group: string) => {
    if (Object.keys(groupTitles).includes(group)) {
        return groupTitles[group as keyof typeof groupTitles];
    }
    return group.charAt(0).toUpperCase() + group.slice(1);
  }
  return (
    <Wrapper>
        <TableHeaderContainer>
            {tableHeaders.map(header => <TableHeader key={header} header={header}>{header}</TableHeader>)}
        </TableHeaderContainer>
        <TableContent>
            {Object.keys(tabData).map(group => 
            <TableGroup 
              key={group}
              group={group}
              title={getGroupTitle(group)} 
              rows={tabData[group as keyof ResponseData]}
              tabData={tabData}
              setTabData={setTabData} 
            />)}
        </TableContent>
    </Wrapper>
  );
}

export default Table;
