import styled from "styled-components";
const grey = "#F0F0F0";
const arrowBackground = "#EEEEEE";
const darkPurple = "#7B1FA2";

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

const IconWrapper = styled.span`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${arrowBackground};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: ${darkPurple};
`;

const Content = styled.div`
  box-shadow: 0px 5px 10px ${grey};
  padding: 25px;
  display: grid;
  grid-template-columns: 2fr 0.5fr 4fr 1fr;
  font-size: 14px;
`;

export { Wrapper, Header, IconWrapper, Content };