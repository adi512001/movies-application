import React from 'react';
import { Wrapper, Header, Content } from "./TableGroupStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

interface Props {
    visible: boolean;
}

const TableGroup = ({ visible }: Props) => {
  return (
    <Wrapper>
        <Header>
            <FontAwesomeIcon icon={visible ? faCaretDown : faCaretRight} />
            <>title</>
        </Header>
        <Content>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
        </Content>
    </Wrapper>
  );
}

export default TableGroup;
