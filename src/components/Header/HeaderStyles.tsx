import styled from "styled-components";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const purple = "#BE70CB";
const darkPurple = "#6A1B9A";
const grey = "#e0e0e0";

type SubtitleTextProps = {
    bold: boolean;
};

const Wrapper = styled.div`
  box-shadow: 0 4px 2px -2px ${grey};
  background-color: white;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 25px 25px 0px 25px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Method = styled.span`
  text-transform: uppercase;
  color: ${purple};
  font-weight: 500;
  font-size: 18px;
  align-self: center;
`;

const Path = styled.span`
  color: ${darkPurple};
  font-weight: bold;
  font-size: 24px;
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const SubtitleText = styled.span<SubtitleTextProps>`
  color: ${darkPurple};
  font-weight: ${props => props?.bold ? "bold" : "500"};
  font-size: 14px;
`;

const Seperator = styled.span`
  border-bottom: 1px solid ${grey};
  padding-top: 10px;
  display: block;
`;

const HeaderTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: ${darkPurple};
    height: 3px;
  }
  .MuiButtonBase-root {
    text-transform: capitalize;
    font-weight: bold;
  }
  .MuiButtonBase-root.Mui-selected {
    color: ${darkPurple};
  }
`;

const HeaderTab = styled(Tab)`
  .MuiButtonBase-root-MuiTab-root {
    color: ${darkPurple};
  }
`;

export { Wrapper, Container, Title, Method, Path, Subtitle, SubtitleText, Seperator, HeaderTabs, HeaderTab };