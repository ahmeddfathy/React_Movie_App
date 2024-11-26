import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function People() {
const [TrendingPepole, setTrendingPepole] = useState([])
let nums = new Array(20).fill().map((ele,index)=>index+1);
console.log(nums);
let navigate =useNavigate();
let imgBaseUrl ='https://image.tmdb.org/t/p/w500';
async function getAllTerndings(pageNumber){
let {data} =await
axios.get(`https://api.themoviedb.org/3/person/popular?api_key=eba8b9a7199efdcb0ca1f
96879b83c44&language=en-US&page=${pageNumber}`);
setTrendingPepole (data.results);
}
useEffect(() => {
getAllTerndings(1);
}, [])
function getActorDetalis(id){
navigate({
pathname:'/actordetails',
search:`?id=${id}`,
})
}


return (
<>
<div className="row">
{TrendingPepole.map((pepole)=>
<div onClick={()=>getActorDetalis(pepole.id)} key={pepole.id} className="col-md-2 
gy-3">
<div className="actorsDisplay ">
<img src={imgBaseUrl+pepole.profile_path} className='w-100' alt=''/>
<h2 className='h5 text-center mt-2' >{pepole.name}</h2>
</div>
</div>
)}
</div>
<nav aria-label="...">

<ul className="pagination pagination-sm d-flex justify-content-center align-items-center ">
<img  />
{nums.map((pagenumber)=> <li onClick={()=>getAllTerndings(pagenumber)}

key={pagenumber} className="page-item "><a className="page-link bg-transparent text-black" >{pagenumber}</a></li>)}
</ul>
</nav>
</>
)
}