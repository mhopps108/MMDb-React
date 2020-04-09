import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "../devices";

const StyledMovieListItem = styled.div`
  display: flex;
  padding: 4px;
  background: #dedede;
  height: 150px;
  min-width: 350px;
  max-width: 400px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Poster = styled.div`
  min-width: 92px;
  /* height: 138px; */
  height: 100%;
  background-image: url(${props => props.url});
  // objectFit: contain;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

// className="w-100 pl-3 pt-1 d-flex flex-column justify-content-start"
const Details = styled.div`
  display: flex;
`;

const TitleLink = styled.h4`
  font-size: 1.2rem;
  color: #555;
  overflow: hidden;
  line-height: 1.2em;
  max-height: 2.4em;
  white-space: normal;
`;

function MovieListItem({ movie }) {
  const {
    imdb_id,
    title,
    year,
    runtime,
    certification,
    imdb_rating_avg,
    imdb_rating_count,
    genres,
    poster_url
  } = movie;

  return (
    <>
      <StyledMovieListItem>
        <Poster url={poster_url} />

        <div className="w-100 pl-3 pt-1 d-flex flex-column justify-content-start">
          <Link to={`/movie/${imdb_id}`}>
            <TitleLink>{title}</TitleLink>
          </Link>

          <div style={{ fontSize: "0.8rem", color: "grey" }}>
            <div className="w-100 d-flex">
              <p className="mb-1 pr-3">{year}</p>
              {/* <p className="mb-1">•</p> */}
              <p className="mb-1 pr-3">
                {runtime}
                <small> mins</small>
              </p>
              <p className="mb-1 pr-3">{certification}</p>
              <p className="mb-1">
                {imdb_rating_avg}
                <small> /10</small>
              </p>
            </div>
            <div className="d-flex">
              {genres &&
                genres.map(genre => {
                  return <div className="pr-3">{genre}</div>;
                })}
            </div>
          </div>
        </div>
      </StyledMovieListItem>
    </>
  );
}

export default MovieListItem;
