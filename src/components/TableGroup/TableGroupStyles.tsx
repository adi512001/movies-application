import styled from "styled-components";
const grey = "#F0F0F0";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Header = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const Content = styled.div`
  box-shadow: 0px 5px 10px ${grey};
  padding: 25px;
  display: grid;
  grid-template-columns: 2fr 0.5fr 4fr 1fr;
  font-size: 14px;
`;

export { Wrapper, Header, Content };