// File: src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../Home.module.css';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);
  const navigate = useNavigate();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  // Fetch trending data
  async function fetchTrending(mediaType, setState) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/day`,
        {
          params: {
            api_key: 'eba8b9a7199efdcb0ca1f96879b83c44',
          },
        }
      );
      setState(response.data.results);
    } catch (error) {
      console.error(`Failed to fetch ${mediaType}:`, error);
    }
  }

  // Fetch all trending data on mount
  useEffect(() => {
    fetchTrending('movie', setTrendingMovies);
    fetchTrending('tv', setTrendingTV);
    fetchTrending('person', setTrendingPeople);
  }, []);

  // Navigate to details
  function handleNavigation(path, id) {
    navigate(`${path}?id=${id}`);
  }

  return (
    <>
      {/* Trending Movies */}
      <div className="row">
        <div className="col-md-4 my-4">
          <div className="welcome mt-4">
            <div className={`${styles.brdr} my-4 w-50`}></div>
            <h2>Trending</h2>
            <h2>Movies</h2>
            <h2>To Watch Now</h2>
            <p className="text-muted">Most Watched Movies By Day</p>
            <div className={`${styles.brdr} my-4 w-100`}></div>
          </div>
        </div>
        {trendingMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleNavigation('/details', movie.id)}
            className="col-md-2 gy-3"
          >
            <div className="movieDisplay position-relative">
              <img
                src={movie.poster_path ? imgBaseUrl + movie.poster_path : '/placeholder.jpg'}
                className="w-100"
                alt={movie.title || 'Movie Poster'}
              />
              <h2 className="h5 text-center mt-2">{movie.title}</h2>
              <div className="bg-info w-25 position-absolute top-0 end-0 text-center">
                <span>
                  {Math.floor(movie.vote_average)} <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trending TV */}
      <div className="row">
        <div className="col-md-4 my-4">
          <div className="welcome">
            <div className={`${styles.brdr} my-4 w-50`}></div>
            <h2>Trending</h2>
            <h2>TV</h2>
            <h2>To Watch Now</h2>
            <p className="text-muted">Most Watched TV Shows By Day</p>
            <div className={`${styles.brdr} my-4 w-100`}></div>
          </div>
        </div>
        {trendingTV.map((tv) => (
          <div
            key={tv.id}
            onClick={() => handleNavigation('/tvdetalis', tv.id)}
            className="col-md-2 gy-3"
          >
            <div className="tvShowDisplay position-relative">
              <img
                src={tv.poster_path ? imgBaseUrl + tv.poster_path : '/placeholder.jpg'}
                className="w-100"
                alt={tv.name || 'TV Show Poster'}
              />
              <h2 className="h5 text-center mt-2">{tv.name}</h2>
              <div className="bg-info w-25 position-absolute top-0 end-0 text-center">
                <span>
                  {Math.floor(tv.vote_average)} <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Actors */}
      <div className="row">
        <div className="col-md-4 my-4">
          <div className="welcome mt-4">
            <div className={`${styles.brdr} my-4 w-50`}></div>
            <h2>Trending</h2>
            <h2>Actors</h2>
            <h2>In The World Now</h2>
            <p className="text-muted">Most Watched Actors By Day</p>
            <div className={`${styles.brdr} my-4 w-100`}></div>
          </div>
        </div>
        {trendingPeople.map((person) => (
          <div
            key={person.id}
            onClick={() => handleNavigation('/actordetails', person.id)}
            className="col-md-2 gy-3"
          >
            <div className="actorDisplay">
              <img
                src={person.profile_path ? imgBaseUrl + person.profile_path : '/placeholder.jpg'}
                className="w-100"
                alt={person.name || 'Actor'}
              />
              <h2 className="h5 text-center mt-2">{person.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
