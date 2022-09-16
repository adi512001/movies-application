import styled from "styled-components";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const purple = "#BE70CB";
const darkPurple = "#6A1B9A";
const grey = "#F0F0F0";

type SubtitleTextProps = {
    bold: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 25px;
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
  }
`;

const HeaderTab = styled(Tab)`
  .MuiButtonBase-root-MuiTab-root {
    color: ${darkPurple};
  }
`;

export { Container, Title, Method, Path, Subtitle, SubtitleText, Seperator, HeaderTabs, HeaderTab };