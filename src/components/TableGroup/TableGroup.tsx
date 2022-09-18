import React, { useState } from 'react';
import { Wrapper, Header, Content } from "./TableGroupStyles";
import { TableRow } from '../../containers/RouteDetails/RouteDetails';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import Flag from '../Flag/Flag';
import { RequestData, ResponseData } from "../Table/Table";

interface Props {
    title: string;
    group: string;
    rows: TableRow[];
    tabData: RequestData | ResponseData;
    setTabData: React.Dispatch<React.SetStateAction<{
        body: TableRow[];
        headers: TableRow[];
        queryParams: TableRow[];
        urlParams: TableRow[];
    } | {
        body: TableRow[];
        headers: TableRow[];
    }>>;
}

const TableGroup = ({ title, group, rows, tabData, setTabData }: Props) => {
    const [visible, setVisible] = useState(false);    

    const onArrowClick = () => {
        setVisible(!visible);
    }
    const onFlagClick = (type: string) => {
        const changedTabData = { ...tabData };
        changedTabData[group as keyof typeof tabData] = 
        { ...changedTabData[group as keyof typeof tabData], 
            [type]: !changedTabData[group as keyof typeof tabData][type] 
        }
        setTabData(changedTabData);
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
