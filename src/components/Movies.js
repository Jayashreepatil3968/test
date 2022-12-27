import React, { useEffect, useState } from "react";
import MovieInfo from "./MovieInfo";


export const Movies = () => {
  const [data, setData] = useState([]);
  const [movieId, setMovieId] = useState("");
   
  useEffect(() => {
    const credentials = {
      method: "GET",
      headers: {
        Authorization: "Bearer Wookie2019",
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    };
    fetch("https://wookie.codesubmit.io/movies", credentials)
      .then((req) => req.json())
      .then((res) => setData(res.movies));
  }, []);
  console.log(data);

  return (
    <>
      <div>
        {movieId === "" ? (
          <div className="main-container1 main-counter">
            <div className="grid main-container1">
              {data.map((movies, id) => {
                return (
                  <div className="grid-item" key={id}>
                    <div className="card">
                      <img
                        className="card-img"
                        src={movies.poster}
                        alt="Rome"
                      />
                      <div className="card-content">
                        <h1 className="card-header">{movies.title}</h1>
                        <div className="movie-card">
                          <h3>Director:{movies.director}</h3>
                          <h3>Duration:{movies.length}</h3>
                        </div>

                        <p className="card-text">{movies.overview}</p>
                        <button
                          className="card-btn"
                          onClick={() => setMovieId(movies.id)}
                        >
                          Visit <span>&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="movie-details">
            <MovieInfo data={data} movieId={movieId} />
          </div>
        )}
      </div>
    </>
  );
};
