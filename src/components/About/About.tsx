import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Wrapper, 
  Content,
  Header, 
  Image, 
  HeaderDetails, 
  TitleWrapper, 
  Title, 
  ContentRating, 
  Year, 
  RatingWrapper,
  Votes,
  Time,
  Stars,
  Plot
} from "./AboutStyles";
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MovieIcon from '@mui/icons-material/Movie';

const About = () => {
  const location = useLocation();
  const movie = location.state;
  const { 
    image, 
    title, 
    contentRating, 
    description, 
    imDbRating,
    genres,
    imDbRatingVotes,
    runtimeStr,
    stars,
    plot
   } = movie;
  
  return (
    <Wrapper>
      <Content>
        <Header>
          <Image src={image} alt="img" />
          <HeaderDetails>
            <TitleWrapper>
              <Title>{title}</Title>
              <ContentRating>{contentRating}</ContentRating>
            </TitleWrapper>
            <Year>{description}</Year>
            <RatingWrapper>
              <Rating value={Number(imDbRating)/2} readOnly />
              <Votes>
                {`(${imDbRatingVotes})`}
              </Votes>
            </RatingWrapper>
            {genres}
            <Time>
              <AccessTimeIcon fontSize='small' />
              {runtimeStr}
            </Time>
            <Stars>
              <MovieIcon fontSize='small' />
              {stars}
            </Stars>
          </HeaderDetails>
        </Header>
        <Plot>
          {plot}
        </Plot>
      </Content>
    </Wrapper>
  );
}

export default About;
