import styled from "styled-components";
const darkGrey = "#DFDFDF";

const Wrapper = styled.div`
  background-color: white;
  margin: 0 25px;
  max-height: 65vh;
`;
const TableHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 0.5fr 4fr 1fr;
  border-bottom: 1px solid ${darkGrey};
  padding: 15px;
`;

const TableHeader = styled.span`
  color: #AB47BC;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
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