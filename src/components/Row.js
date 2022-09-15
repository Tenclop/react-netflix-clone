import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "../instance";

const img_url = "https://image.tmdb.org/t/p/original";
const no_img =
  "https://res.cloudinary.com/dxdboxbyb/image/upload/v1620052094/ayi6tvyiedrlmjiim6yn.png";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await instance(fetchUrl);
        const moviesData = request.data.results;
        setMovies(moviesData);

        return request;
      } catch (error) {}
    };

    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <Wrapper>
      {/* <div class="loading-spinner-container">
        <div class="spinner">
          <div></div>
        </div>
      </div> */}

      <h2>{title}</h2>
      <div className="row-container">
        {movies.map((item) => (
          <img
            className="row-proster"
            src={
              item.backdrop_path
                ? `${img_url}${item.backdrop_path}`
                : `${no_img}`
            }
            key={item.id}
            alt={item.title}
          ></img>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: grey;
  margin-left: 1.5rem;

  h2 {
    margin-left: 1.5rem;
  }
  .row-container {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 1.2rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .row-proster {
    width: 100%;
    object-fit: contain;
    max-height: 120px;
    margin-right: 1rem;
    cursor: pointer;
    transition: transform var(--transition);
    border-radius: var(--radius);

    &:hover {
      transform: scale(1.28);
    }
  }
`;
export default Row;
