import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../Home.module.css';
export default function Home() {
    const [TrendingMovies, setTrendingMovies] = useState([])
    const [TrendingTV, setTrendingTV] = useState([])
    const [TrendingPepole, setTrendingPepole] = useState([])
    let navigate =useNavigate();
    let imgBaseUrl ='https://image.tmdb.org/t/p/w500';
    async function getAllTerndings(MediaType,callback){
    let {data} =await
    axios.get(`https://api.themoviedb.org/3/trending/${MediaType}/day?api_key=eba8b9a719
    9efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`);
    callback(data.results);
    }
    useEffect(() => {
        getAllTerndings('movie',setTrendingMovies);
        getAllTerndings('tv',setTrendingTV);
        getAllTerndings('person',setTrendingPepole);
        console.log(TrendingMovies)
        }, [])
        function getDetalis(id){
            navigate({
            pathname:'/detalis',
            search:`?id=${id}`,
            })
            }
            function getTvDetalis(id){
                navigate({
                    pathname:'/tvdetalis',
                    search:`?id=${id}`,
                    })
                    }
                    function getActorDetalis(id){
                    navigate({
                    pathname:'/actordetalis',
                    search:`?id=${id}`,
                    })
                    }
                    return (
                        <>
                        <div className="row">
                        <div className="col-md-4 my-4">
                        <div className="welcome mt-4">
                        <div className={`${styles.brdr} my-4 w-50`}></div>
                        <h2>Trending</h2>
                        <h2>Movies</h2>
                        <h2>To Watch Now</h2>
                        <p className='text-muted'>Most Watched Movies By Day</p>
                        <div className={`${styles.brdr} my-4 w-100`}></div>
                        </div>
                        </div>
                        {TrendingMovies.map((movie)=>
                        <div onClick={()=>getDetalis(movie.id)} key={movie.id} className="col-md-2 gy-3">
                        <div className="movieDisplay position-relative">
                        <img src={imgBaseUrl+movie.poster_path} className='w-100'alt='' />
                        <h2 className='h5 text-center mt-2'>{movie.title}</h2>
                        <div className="bg-info w-25 position-absolute top-0 end-0 text-center">
                        <span>{Math.floor( movie.vote_average)}<i className="fa-solid fa-star"></i></span>
                        </div>
                        </div>
                        </div >
                        )}
                        </div>
                        <div className="row">
                        <div className="col-md-4 my-4 ">
                        <div className="welcome ">
                        <div className={`${styles.brdr} my-4 w-50`}></div>
                        <h2>Trending</h2>
                        <h2>TV</h2>
                        <h2>To Watch Now</h2>
                        <p className='text-muted'>Most Watched TV Showes By Day</p>
                        <div className={`${styles.brdr} my-4 w-100`}></div>
                        </div>
                        </div>
                        {TrendingTV.map((tv)=><div onClick={()=>getTvDetalis(tv.id)} key={tv.id}
                        className="col-md-2 gy-3">
                        <div className="TvshowesDisplay position-relative">
                        <img src={imgBaseUrl+tv.poster_path} className='w-100'  alt=''/>
                        <h2 className='h5 text-center mt-2'>{tv.name}</h2>
                        <div className="bg-info w-25 position-absolute top-0 end-0 text-center">
                        <span>{Math.floor( tv.vote_average)}<i className="fa-solid fa-star"></i></span>
                        </div>
                        </div>
                        </div>
                        )}
                        </div>
                        <div className="row">
                        <div className="col-md-4 my-4">
                        <div className="welcome mt-4">
                        <div className={`${styles.brdr} my-4 w-50`}></div>
                        <h2>Trending</h2>
<h2>Actors</h2>
<h2>In The World Now</h2>
<p className='text-muted'>Most Watched Acrors By Day</p>
<div className={`${styles.brdr} my-4 w-100`}></div>
</div>
</div>
{TrendingPepole.map((pepole)=>
<div onClick={()=>getActorDetalis(pepole.id)} key={pepole.id} className="col-md-2 gy-3">
<div className="actorsDisplay ">
<img src={imgBaseUrl+pepole.profile_path} className='w-100' alt='' />
<h2 className='h5 text-center mt-2'>{pepole.name}</h2>
</div>
</div>
)}
</div>
</>
)
}                                                       