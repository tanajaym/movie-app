import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "../App";

const Container =styled.div`
  max-width: 1200
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 30px;
  border-bottom: 1rem solid;
  border-color: 	rgb(0,0,0, 0.4);
`;

const CoverImg =styled.img`
  object-fit: cover;
  height: 20rem;
`;

const InfColumn =styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
const MovieName =styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  margin: 1rem 0;
  overflow:hidden;
  white-space: nowrap;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span{
    font-weight: normal;
  }
`;

const MovieInfComponent = (props) =>{
  const [movieInfo, setMovieInfo] = useState();
  const { selectMovie } = props; 
  useEffect(()=>{ axios.get(`https://www.omdbapi.com/?i=${selectMovie}&apikey=${API_KEY}`)
                      .then((response)=>setMovieInfo(response.data));
                    },[selectMovie]);
  return(
  <Container>
  <CoverImg src={movieInfo?.Poster} />
  <InfColumn>
  <MovieName>TITLE: {movieInfo?.Title}</MovieName>
  <MovieName>TYPE: <span>{movieInfo?.Type}</span></MovieName>
  <MovieName>RELEASE: <span>{movieInfo?.Released}</span></MovieName>
  <MovieName>COUNTRY: <span>{movieInfo?.Country}</span></MovieName>
  <MovieName>LANGUAGE: <span>{movieInfo?.Language}</span></MovieName>
  <MovieName>GENRE: <span>{movieInfo?.Genre}</span></MovieName>
  <MovieName>PLOT: <span>{movieInfo?.Plot}</span></MovieName>
  <MovieName>RATING: <span>{movieInfo?.imdbRating}</span></MovieName>

  </InfColumn>
  </Container>
  );
} ;
export default MovieInfComponent;