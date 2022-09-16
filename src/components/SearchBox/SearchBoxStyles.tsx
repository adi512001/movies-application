import styled from "styled-components";
import Checkbox from '@mui/material/Checkbox';

const darkPurple = "#6A1B9A";
const grey = "#F0F0F0";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background-color: white;
  margin: 0px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  width: 500px;
`;

const ApplyButton = styled.button`
  width: 150px;
  border: none;
  background-color: #6A1B9A;
  color: white;
  font-weight: bold;
  cursor: pointer;
  height: 100%;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PIIFilter = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  padding: 0 35px 0 25px;
  border-left: 2px solid ${grey};
  height: 70%;
`;

const PIICheckbox = styled(Checkbox)`
  
`;

const Text = styled.span`
  align-self: center;
`;

const ResetButton = styled.span`
  color: ${darkPurple};
  cursor: pointer;
  align-self: flex-end;
  margin-right: 25px;
  font-size: 14px;
  margin-top: 5px;
`;

export { Container, Wrapper, Search, Input, ApplyButton, Filters, PIIFilter, PIICheckbox, Text, ResetButton };