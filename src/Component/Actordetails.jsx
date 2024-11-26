import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ActorDetails() {
  const [searchParams] = useSearchParams();
  const [actorDetails, setActorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const actorID = searchParams.get('id');

  async function fetchActorDetails() {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${actorID}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`
      );
      setActorDetails(data);
    } catch (err) {
      console.error('Error fetching actor details:', err);
      setError('Failed to fetch actor details. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (actorID) fetchActorDetails();
  }, [actorID]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <div className="row">
      <div className="col-md-4 my-4">
        <img
          src={actorDetails?.profile_path ? imgBaseUrl + actorDetails.profile_path : '/placeholder.jpg'}
          className="w-100"
          alt={actorDetails?.name || 'Actor'}
        />
      </div>
      <div className="col-md-8 my-4">
        <h2>{actorDetails?.name}</h2>
        <h4 className="text-muted">{actorDetails?.known_for_department}</h4>
        <p>{actorDetails?.biography}</p>
        <ul>
          <li>Birthday: {actorDetails?.birthday}</li>
          <li>Place of Birth: {actorDetails?.place_of_birth}</li>
          <li>Popularity: {actorDetails?.popularity}</li>
        </ul>
      </div>
    </div>
  );
}
