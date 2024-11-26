import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const nums = Array.from({ length: 20 }, (_, index) => index + 1);
  const navigate = useNavigate();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  async function getAllTrending(pageNumber = 1) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`
      );
      setTrendingMovies(data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  }

  useEffect(() => {
    getAllTrending(1);
  }, []);

  function getDetails(id) {
    navigate({
      pathname: '/details',
      search: `?id=${id}`,
    });
  }

  return (
    <>
      <div className="row">
        {trendingMovies.map((movie) => (
          <div
            onClick={() => getDetails(movie.id)}
            key={movie.id}
            className="col-md-2 gy-3"
          >
            <div className="movieDisplay position-relative">
              <img
                src={movie.poster_path ? imgBaseUrl + movie.poster_path : ''}
                className="w-100"
                alt={movie.title || 'Movie Poster'}
              />
              <h2 className="h5 text-center mt-2">{movie.title}</h2>
              <div className="bg-warning w-25 position-absolute top-0 end-0 text-center">
                <span>
                  {Math.floor(movie.vote_average)}
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-sm d-flex justify-content-center align-items-center">
          {nums.map((pageNumber) => (
            <li
              onClick={() => getAllTrending(pageNumber)}
              key={pageNumber}
              className="page-item"
            >
              <button className="page-link bg-transparent text-black">
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
