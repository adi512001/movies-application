import React from 'react';
import { Wrapper, Header, Content } from "./TableGroupStyles";
import { TableRow } from '../../containers/RouteDetails/RouteDetails';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

interface Props {
    visible: boolean;
    title: string;
    rows: TableRow[];
}

const TableGroup = ({ visible, title, rows }: Props) => {
  return (
    <Wrapper>
        <Header>
            <FontAwesomeIcon icon={visible ? faCaretDown : faCaretRight} />
            <>{title}</>
        </Header>
        <>
            {rows?.map(row => 
            <Content key={row.name}>
                <>{row.name}</>
                <>{row.pii}</>
                <>{row.masked}</>
                <>{row.type}</>
            </Content>
            )}
        </>
    </Wrapper>
  );
}

export default TableGroup;
