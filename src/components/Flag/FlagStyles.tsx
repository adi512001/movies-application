import styled from "styled-components";

type FlagProps = {
  type: string;
  value: boolean | undefined;
};

const lightBlue = "#CEE5EC";
const blue = "#57A6C0";
const darkPurple = "#7B1FA2";
const darkBlue = "#12296D";

const renderBackgroundByType = (props: FlagProps) => {
  const { type, value } = props;
  if (type === "type") {
    return lightBlue;
  }
  if (value) {
    if (type === "masked") {
      return darkPurple;
    }
    return darkBlue;
  }
  return "white";
}

const renderColorByType = (props: FlagProps) => {
  const { type, value } = props;
  if (type === "type") {
    return blue;
  }
  if (value) {
    return "white";
  }
  if (type === "masked") {
    return darkPurple;
  }
  return darkBlue;
}

const renderBorderColorByType = (props: FlagProps) => {
  const { type, value } = props;
  if (type === "type" || value) {
    return "transparent";
  }
  if (type === "masked") {
    return darkPurple;
  }
  return darkBlue;
}

const Wrapper = styled.div<FlagProps>`
  background-color: ${props => renderBackgroundByType(props)};
  color: ${props => renderColorByType(props)};
  width: min-content;
  text-transform: uppercase;
  padding: 0 ${props => props?.type === "pii" ? "20px" : "10px"};
  font-weight: bold;
  border: 2px solid ${props => renderBorderColorByType(props)};
  font-size: 12px;
`;

export { Wrapper };