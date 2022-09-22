import React, { useState, useEffect } from "react";
import requests from "../requests";
import instance from "../instance";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  console.log(movie);
  // console.log(`${movie?.overview.substring(0, 200)}...`);
  return (
    <Wrapper
      className="hero"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="hero__content">
        <h1 className="hero__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="hero__desc">
          {/* {movie?.overview} */}
          {movie?.overview && `${movie?.overview.substring(0, 200)}...`}
        </p>

        <div className="hero__btns">
          <button className="hero-btn hero-btn-play">
            <FaPlay className="icon" />
            Play
          </button>
          <button className="hero-btn hero-btn-info">
            <AiOutlineInfoCircle className="icon" />
            More Info
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  color: var(--clr-primary-1);
  height: 90vh;
  .hero {
    &__content {
      margin-left: 2rem;
      padding-top: 8.75rem;
      height: 12rem;
    }

    &__title {
      font-size: 5.25rem;
      font-weight: 800;
      padding-bottom: 0.3rem;
    }

    &__desc {
      width: 45rem;
      max-width: 360px;
      /* height: 80px; */
      line-height: 1.3;
      padding-top: 1rem;
      font-size: 1.8rem;
      font-family: var(--ff-secondary);
    }

    &__btns {
      padding-top: 1rem;
    }
    &-btn {
      cursor: pointer;
      outline: none;
      border: none;
      font-weight: 700;
      font-size: 2rem;
      border-radius: var(--radius);
      padding: 1rem 3rem;
      margin-right: 1rem;

      &-play {
        color: var(--clr-primary-2);
        background-color: var(--clr-primary-1);
      }

      &-info {
        color: var(--clr-primary-1);
        background-color: var(--clr-primary-2);
      }

      .icon {
        font-size: 3rem;
        margin-right: 1rem;
        vertical-align: middle;
      }
    }
  }
`;
export default Banner;
