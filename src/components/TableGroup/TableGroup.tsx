import React, { useState } from 'react';
import { Wrapper, Header, Content } from "./TableGroupStyles";
import { TableRow } from '../../containers/RouteDetails/RouteDetails';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

interface Props {
    title: string;
    rows: TableRow[];
}

const TableGroup = ({ title, rows }: Props) => {
    const [visible, setVisible] = useState(false);

    const onArrowClick = () => {
        setVisible(!visible);
    }
  return (
    <Wrapper>
        <Header>
            <FontAwesomeIcon icon={visible ? faCaretDown : faCaretRight} onClick={onArrowClick} />
            <>{title}</>
        </Header>
        {visible && <>
            {rows?.map(row => 
            <Content key={row.name}>
                <>{row.name}</>
                <>{row.pii}</>
                <>{row.masked}</>
                <>{row.type}</>
            </Content>
            )}
        </>}
    </Wrapper>
  );
}

export default TableGroup;
