import styled from "styled-components";

const grey = "#F0F0F0";

const Wrapper = styled.div`
  background-color: ${grey};
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const SearchBox = styled.div`
  background-color: white;
  margin: 0px 25px;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 15px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

export { Wrapper, SearchBox, Search, Input };