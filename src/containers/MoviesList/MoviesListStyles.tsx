import styled from "styled-components";
import { background, lighterText } from "../../consts/Colors";


const LoadingWrapper = styled.div`
  background-color: ${background};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: ${background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-self: center;
  height: 5vh;
  .MuiFormControl-root {
    margin: 0;
  }
  .MuiFormLabel-root {
    color: ${lighterText};
  }
  .MuiInputBase-root {
    color: white;
    box-sizing: border-box;
    height: 100%;
  }
`;




export { LoadingWrapper, Wrapper, Movies, Filters };