import axios from "axios";
import React, { useEffect ,useState} from 'react'
import { useSearchParams } from 'react-router-dom';
export default function TvDetalis() {
const [searchparams, setSearchparams] =useSearchParams ();
const [detalis, setDetalis] = useState([])
let imgBaseUrl ='https://image.tmdb.org/t/p/w500';
let currentID =searchparams.get('id')
async function getAllDetalis(MediaType){
let {data} =await
axios.get(`https://api.themoviedb.org/3/${MediaType}/${currentID}?api_key=eba8b9a719
9efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A&language=en-US`);
setDetalis(data);
}
useEffect(() => {
    getAllDetalis('tv')
    }, [])
    return (
        <>
        <div className="row">
        <div className="col-md-4 my-4">
        <div className="displayImg">
        <img src={imgBaseUrl+detalis.poster_path} className='w-100' alt="" />
        </div>
        </div>
        <div className="col-md-8 my-4">
        <h2>{detalis.name}</h2>
        <h3 className='h5 text-muted'>{detalis.tagline}</h3>
        {detalis.genres?.map((genre)=>
        <button className='btn btn-info mx-2' key={genre.id}>{genre.name}</button>
        )}
<ul className='mt-5'>
<li className='list-unstyled mb-3'>Budget : {detalis.budget}</li>
<li className='list-unstyled mb-3' >Popularity: {detalis.popularity}</li>
<li className='list-unstyled mb-3'>Vote Average : {detalis.vote_average}</li>
<li className='list-unstyled mb-3'>Vote Count : {detalis.vote_count}</li>
<li className='list-unstyled mb-3'>Release date : {detalis.release_date}</li>
</ul>
<p className='text-muted fs-5 mt-5' >{detalis.overview}</p>
</div>
</div>
</>
)
}        