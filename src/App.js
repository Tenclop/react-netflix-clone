import "./App.css";
import styled from "styled-components";

import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Adventure"} fetchUrl={requests.fetchAdventureMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"SF Movies"} fetchUrl={requests.fetchSFMovies} />
    </div>
  );
}

export default App;
// const Button = styled.button`
//   color: grey;
// `;
