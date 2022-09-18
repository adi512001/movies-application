import styled from "styled-components";
const grey = "#e0e0e0";
const darkGrey = "#d3d3d3";

interface TableHeaderProps {
  header: string;
}

const Wrapper = styled.div`
  background-color: white;
  margin: 0 25px;
  max-height: 65vh;
  box-shadow: 0px 0px 2px 0px ${grey};
`;
const TableHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 0.5fr 4fr 1fr;
  border-bottom: 1px solid ${darkGrey};
  padding: 15px;
`;

const TableHeader = styled.span<TableHeaderProps>`
  color: #AB47BC;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  padding-left: ${props => props?.header === "name" ? "30px" : "0"};
`;

const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 56vh;
  overflow: auto;
  padding: 15px;
`;

export { Wrapper, TableHeaderContainer, TableHeader, TableContent };