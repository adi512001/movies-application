import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { background, cardBorder } from "../../consts/Colors";

const Wrapper = styled.div`
  background-color: ${background};
  border: 1px solid ${cardBorder};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: all 0.2s ease;
  color: #676767;
  align-self: center;
  :hover {
    color: white;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 250px;
  background-color: ${background};
  color: white;
  font-size: 1rem;
`;

export { Wrapper, Search, Icon, Input };