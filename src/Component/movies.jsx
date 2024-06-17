import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Movies() {
const [TrendingMovies, setTrendingMovies] = useState([])
let nums = new Array(20).fill(1).map((ele,index)=>index+1);
console.log(nums);
let navigate =useNavigate();
let imgBaseUrl ='https://image.tmdb.org/t/p/w500';
async function getAllTerndings(pageNumber){
let {data} =await
axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=eba8b9a7199efdcb0ca1f
96879b83c44&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber
}&with_watch_monetization_types=flatrate`);
setTrendingMovies (data.results);
}
useEffect(() => {
getAllTerndings(1);
}, [])

function getDetalis(id){
navigate({
pathname:'/detalis',
search:`/${id}`,
})
}
return(
    
        <>
        <div className="row">
        {TrendingMovies.map((movie)=>
<div onClick={()=>getDetalis(movie.id)} key={movie.id} className="col-md-2 gy-3">
<div className="movieDisplay position-relative">
<img src={imgBaseUrl+movie.poster_path} className='w-100' alt=''/>
<h2 className='h5 text-center mt-2'>{movie.title}</h2>
<div className="bg-warning w-25 position-absolute top-0 end-0 text-center">
<span>{Math.floor( movie.vote_average)}<i className="fa-solid fa-star"></i></span>
</div>
</div>
</div>
)}
</div>
<nav aria-label="...">
<ul className="pagination pagination-sm d-flex justify-content-center align-items-center ">
{nums.map((pagenumber)=> <li onClick={()=>getAllTerndings(pagenumber)}
key={pagenumber} className="page-item "><a className="page-link bg-transparent text-white" >{pagenumber}</a></li>)}
</ul>
</nav>
</>
)
}


