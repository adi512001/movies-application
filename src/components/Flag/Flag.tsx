import React from 'react';
import { Wrapper } from "./FlagStyles";

interface Props {
    type: string;
    textValue?: string;
    boolValue?: boolean;
}

const Flag = ({ type, textValue, boolValue }: Props) => {

  const renderTitleByType = () => {
    if (type === "type") {
      return textValue;
    }
    return type;
  }

  const onFlagClick = () => {
    if (type === "type") {
      return null;
    }
    
  }
  
  return (
    <Wrapper type={type} value={boolValue} onClick={onFlagClick}>
        {renderTitleByType()}
    </Wrapper>
  );
}

export default Flag;
