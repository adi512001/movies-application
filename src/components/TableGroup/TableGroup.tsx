import React, { useState } from 'react';
import { Wrapper, Header, IconWrapper, Content } from "./TableGroupStyles";
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
    const onFlagClick = (type: "pii" | "masked", name: string) => {
        const changedTabData = { ...tabData };
        // debugger;
        let groupArray = tabData[group as keyof typeof tabData];
        const arrayRowIndex = groupArray?.findIndex(row => row.name === name);
        const arrayRow = groupArray[arrayRowIndex];
        // remove item from array
        groupArray?.splice(arrayRowIndex, 1);
        let changedRow = { ...arrayRow };
        if (changedRow) {
            changedRow[type] = !arrayRow[type as keyof typeof arrayRow]
        }
        // add changed item back to array
        groupArray?.splice(arrayRowIndex, 0, changedRow);
        changedTabData[group as keyof typeof tabData] = groupArray;
        setTabData(changedTabData);
    }
  return (
    <Wrapper>
        <Header>
            <IconWrapper>
                <FontAwesomeIcon 
                    icon={visible ? faCaretDown : faCaretRight} 
                    onClick={onArrowClick} 
                />
            </IconWrapper>
            <>{title}</>
        </Header>
        {visible && <>
            {rows?.map(row => 
            <Content key={row.name}>
                <span>{row.name}</span>
                <Flag type="pii" boolValue={row.pii} onFlagClick={type => onFlagClick(type, row.name)} />
                <Flag type="masked" boolValue={row.masked} onFlagClick={type => onFlagClick(type, row.name)} />
                <Flag type="type" textValue={row.type} />
            </Content>
            )}
        </>}
    </Wrapper>
  );
}

export default TableGroup;
