import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Tvshow() {
const [TrendingTV, setTrendingTV] = useState([])
let nums = new Array(20).fill(1).map((ele,index)=>index+1);
let navigate =useNavigate();
let imgBaseUrl ='https://image.tmdb.org/t/p/w500';
async function getAllTerndings(pageNumber){
let {data} =await
axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=eba8b9a7199efdcb0ca1f968
79b83c44&language=en-US&sort_by=popularity.desc&page=${pageNumber}&timezone=America%2FNew_York&include_nu
ll_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_t
ype=0`);

setTrendingTV (data.results)
}
useEffect(() => {
    getAllTerndings(1);
    }, [])
    function getTvDetalis(id){
    navigate({
    pathname:'/tvdetalis',
    search:`?id=${id}`,
    })
    }
    return (
        <>
<div className="row">
    {TrendingTV.map((tv)=><div onClick={()=>getTvDetalis(tv.id)} key={tv.id}
        className="col-md-2 gy-3">
            <div className="TvshowesDisplay position-relative">
                <img src={imgBaseUrl+tv.poster_path} className='w-100' alt='' />
                <h2 className='h5 text-center mt-2'>{tv.name}</h2>
                <div className="bg-info w-25 position-absolute top-0 end-0 text-center">
                    <span>{Math.floor( tv.vote_average)}<i className="fa-solid fa-star"></i></span>
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