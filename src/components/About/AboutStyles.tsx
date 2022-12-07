import styled from "styled-components";
import { background, lighterText, purple } from "../../consts/Colors";

const Wrapper = styled.div`
    background-color: ${background};
    height: 100vh;
    color: white;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Content = styled.div`
    width: 70%;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    box-sizing: border-box;
    width: 100%;
`;

const Image = styled.img`
  height: 30vh;
  width: auto;
`;

const HeaderDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const ContentRating = styled.h3`
  color: ${lighterText};
  margin: 0;
  align-self: center;
`;

const Year = styled.h4`
  color: ${purple};
  margin: 0;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  .MuiRating-iconEmpty {
    color: ${lighterText};
  }
`;

const Votes = styled.p`
  margin: 0;
  color: ${lighterText};
  align-self: center;
`;

const Time = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const Stars = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const Plot = styled.p`
    box-sizing: border-box;
    width: 100%;
    line-height: 1.5em;
`;


export { Wrapper, Content, Header, Image, HeaderDetails, Title, TitleWrapper, ContentRating, Year, RatingWrapper, Votes, Time, Stars, Plot };