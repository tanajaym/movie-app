import styled from "styled-components";

const MovieContainer =styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 250px;
  box-shadow: 0 0.5px 5px 0 black;
  cursor: pointer;
`;
const CoverImg =styled.img`
  object-fit: cover;
  height: 22rem;
`;
const MovieName =styled.span`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 1rem 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
 
`;

const InfColumn =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const MovieInf =styled.span`
  font-size: bold;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;

const MovieComponent = (props) =>{
  return(<MovieContainer>
    <CoverImg src="https://fontmeme.com/images/Twilight-Poster.jpg"/>
    <MovieName>Twilight</MovieName>
    <InfColumn>
      <MovieInf>2012</MovieInf>
      <MovieInf>movie</MovieInf>
    </InfColumn>
  </MovieContainer>) 
} 
export default MovieComponent;