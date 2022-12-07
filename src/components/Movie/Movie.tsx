import React from 'react';
import { MovieType } from "../../containers/MoviesList/MoviesList";
import { MovieLink, Wrapper, Image, Title, Bottom, Year } from "./MovieStyles";

interface Props {
    movie: MovieType;
}

const Movie = ({ movie }: Props) => {
  const { image, title, description } = movie;

  return (
    <MovieLink to="/about" state={movie}>
    <Wrapper>
        <Image src={image} alt="img" />
        <Bottom>
          <Title>{title}</Title>
          <Year>{description}</Year>
        </Bottom>
    </Wrapper>
    </MovieLink>
  );
}

export default Movie;
