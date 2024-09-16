// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import styled from "styled-components";
import MovieComponent from "./components/movie_components";
import axios from "axios";
// import { useState } from "react/cjs/react.production.min";

const API_KEY ='b76b0f17'; 

const Container =styled.div`
  display: flex; 
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  font-size: 25px;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 10px; 
  font-weight: bold;
  box-shadow: 0 1px 7px 0 black;
  justify-content: space-between;
  align-items: center;
`;

const AppName =styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
`;

const MovieImg = styled.img`
  margin: 15px;
  width: 40px;
  height: 40 px;
`;

const SrchBox = styled.div`
 display: flex;
 flex-direction: row;
 padding: 10px 10px;
 background-color: white;
 width: 50%;
 height: 2rem;
 margin-left: 20px;
 margin-top: 1rem;
 border-radius: 40px;
 align-items: center;

`;

const SrchIcon = styled.img`
  width: 30px;
  height: 30px; 
`; 

const SrchInput = styled.input`
  color: black;
  font-size: 15px;
  font-weight: normal;
  outline: none;
  border: none;
  margin-left: 1rem;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1.5 rem;
  justify-content: space-evenly;
`;  

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [MovieList, updateMovieList] = useState([]);
  const fetchData = async(SearchStr) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${SearchStr}&apikey=${API_KEY}`
    );
    // console.log(response)
    updateMovieList(response.data.Search);
  };

  const onTextChange =(event)=>{
    clearTimeout(timeoutId); 
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(()=>fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
    <Header>
      <AppName>
      <MovieImg src="/movie_icon.svg" />
      react app</AppName>
      <SrchBox> 
      <SrchIcon src="/search_icon.svg" />
      <SrchInput placeholder="Search Movie" 
                  value={searchQuery} 
                  onChange={onTextChange}/>
      </SrchBox>
    </Header>
    <MovieListContainer>
    {MovieList?.length
      ? MovieList.map((movie, index)=><MovieComponent key={index} movie={movie}/>)
      : "No movie search"}
    </MovieListContainer>
    </Container>
  );
}

export default App;


