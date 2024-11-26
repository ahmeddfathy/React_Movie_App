import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function MoviesDetails() {
  const [searchParams] = useSearchParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const currentID = searchParams.get('id');

  async function getAllDetails(MediaType = 'movie') {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${MediaType}/${currentID}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`
      );
      setDetails(data);
    } catch (err) {
      console.error('Error fetching details:', err);
      setError('Failed to fetch movie details. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (currentID) getAllDetails('movie');
  }, [currentID]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <div className="row">
      <div className="col-md-4 my-4">
        <div className="displayImg">
          <img
            src={details?.poster_path ? imgBaseUrl + details.poster_path : '/placeholder.jpg'}
            className="w-100"
            alt={details?.title || 'Movie Poster'}
          />
        </div>
      </div>
      <div className="col-md-8 my-4">
        <h2>{details?.title}</h2>
        <h3 className="h5 text-muted">{details?.tagline}</h3>
        {details?.genres?.map((genre) => (
          <button className="btn btn-info mx-2" key={genre.id}>
            {genre.name}
          </button>
        ))}
        <ul className="mt-5">
          <li className="list-unstyled mb-3">Popularity: {details?.popularity}</li>
          <li className="list-unstyled mb-3">Vote Average: {details?.vote_average}</li>
          <li className="list-unstyled mb-3">Vote Count: {details?.vote_count}</li>
          <li className="list-unstyled mb-3">Release Date: {details?.release_date}</li>
        </ul>
        <p className="text-muted fs-5 mt-5">{details?.overview}</p>
      </div>
    </div>
  );
}
