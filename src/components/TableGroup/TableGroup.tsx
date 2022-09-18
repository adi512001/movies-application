import React, { useState } from 'react';
import { Wrapper, Header, Content } from "./TableGroupStyles";
import { TableRow } from '../../containers/RouteDetails/RouteDetails';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import Flag from '../Flag/Flag';

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
                <span>{row.name}</span>
                <Flag type="pii" boolValue={row.pii} />
                <Flag type="masked" boolValue={row.masked} />
                <Flag type="type" textValue={row.type} />
            </Content>
            )}
        </>}
    </Wrapper>
  );
}

export default TableGroup;
