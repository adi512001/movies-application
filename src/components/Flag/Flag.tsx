import React from 'react';
import { Wrapper } from "./FlagStyles";

interface Props {
    type: string;
    textValue?: string;
    boolValue?: boolean;
    onFlagClick?: (type: "masked" | "pii") => void;
}

const Flag = ({ type, textValue, boolValue, onFlagClick }: Props) => {

  const renderTitleByType = () => {
    if (type === "type") {
      return textValue;
    }
    return type;
  }

  const onClick = () => {
    if ((type === "masked" || type === "pii") && onFlagClick ) {
      let clickedType : "masked" | "pii" = type;
      onFlagClick(clickedType);
    }
    return null;
  }
  
  return (
    <Wrapper type={type} value={boolValue} onClick={onClick}>
        {renderTitleByType()}
    </Wrapper>
  );
}

export default Flag;
