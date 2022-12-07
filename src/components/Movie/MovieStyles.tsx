import styled from "styled-components";
import { Link } from "react-router-dom";
import { cardBackground, purple, cardBorder } from "../../consts/Colors";

const MovieLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 25vh;
  align-items: center;
  background-color: ${cardBackground};
  border: 1px solid ${cardBorder};
  transition: all 0.2s ease;
  :hover {
    border-color: ${purple};
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${purple};
  border-radius: 0 0 10px 10px;
  color: white;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  border-radius: 10px 10px 0 0;
  min-height: 390px;
`;

const Title = styled.span`
  font-weight: bold;
  margin-top: 10px;
`;

const Year = styled.span`
  margin-bottom: 10px;
`;

export { MovieLink, Wrapper, Image, Title, Bottom, Year };