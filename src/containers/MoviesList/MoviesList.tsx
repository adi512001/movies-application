import React, { useState, useEffect } from 'react';
import { Wrapper, LoadingWrapper, Movies, Filters } from "./MoviesListStyles";
import Movie from "../../components/Movie/Movie";
import CircularProgress from '@mui/material/CircularProgress';
import SearchBox from '../../components/SearchBox/SearchBox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { background } from '../../consts/Colors';

export type MovieType = {
  id: string,
  image: string,
  title: string,
  description: string,
  contentRating: string,
  imDbRating: string;
  genres: string;
  imDbRatingVotes: string;
  runtimeStr: string;
  stars: string;
  plot: string;
  genreList: { key: string, value: string }[]
}

type DataJson = {
  results: MovieType[]
}
const MoviesList = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(false);
  const [aggregation, setAggregation] = useState<{ [genre: string]: MovieType[] }>({});
  const [filters, setFilters] = useState<string[]>([]);
  const [searchVal, setSearchVal] = useState("");

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 225,
        width: 250,
        backgroundColor: background,
        color: "white"
      },
    },
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      let aggregation : { [genre: string]: MovieType[] } = {};
      movies?.forEach(movie => {
        if (movie?.genreList?.length > 0) {
          movie?.genreList?.forEach(genre => {
            if (aggregation[genre?.key]) {
              aggregation[genre?.key] = [...aggregation[genre?.key], movie];
            } else {
              aggregation[genre?.key] = [movie];
            }
          })
        }
      });
      setAggregation(aggregation);
    }
  }, [movies]);

  useEffect(() => {
    const filteredData = movies?.filter((el) => {
      let shouldReturnFilters = false;
      let shouldReturnSearch = false;
      if (filters?.length < 1) {
        shouldReturnFilters = true;
      } else {
        shouldReturnFilters = Boolean(el.genreList.find(genre => filters?.includes(genre?.key)));
      }
      if (searchVal === '') {
        shouldReturnSearch = true;
      } else {
        shouldReturnSearch = el.title.toLowerCase().includes(searchVal);
      }
      return shouldReturnSearch && shouldReturnFilters;
    });
    
    setFilteredMovies(filteredData);
  }, [searchVal, movies, filters]);

  const getDataFromAPI = async () => {
    setLoading(true);
    try {
      let data = await fetch(`https://cyabra-assignment-api-production.up.railway.app/api/all-movies?key=jedimindtrick&count=250`);
      let dataJson:DataJson = await data?.json();
      setMovies(dataJson?.results);
      setFilteredMovies(dataJson?.results);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  const onSearch = (searchVal: string) => {
    setSearchVal(searchVal);
  }

  const handleChange = (event: SelectChangeEvent<typeof filters>) => {
    const {
      target: { value },
    } = event;
    setFilters(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      {loading ? 
        <LoadingWrapper>
          <CircularProgress/>
        </LoadingWrapper>
       : 
        <Wrapper>
          <Filters>
            <SearchBox search={(searchVal: string) => onSearch(searchVal)} />
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Genres</InputLabel>
              <Select
                multiple
                value={filters}
                onChange={handleChange}
                input={<OutlinedInput label="Genres" />}
                MenuProps={MenuProps}
              >
                {Object.keys(aggregation).map((genre) => (
                  <MenuItem
                    key={genre}
                    value={genre}
                  >
                    {genre}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
          </Filters>
          <Movies>
            {filteredMovies.length > 0 ? filteredMovies.map(movie => 
              <Movie key={movie.id} movie={movie} />
            ) : null}
          </Movies>
        </Wrapper>}
    </>
  );
}

export default MoviesList;
