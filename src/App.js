
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import MoviesDetalis from './Component/Moviedetails';
import Notfound from './Component/Notfound component';
import TvDetalis from './Component/Tvshowdetalis';
import ActorDetails from './Component/Actordetails';

import Movies from './Component/movies';
import Tvshow from './Component/Tvshow';
import People from './Component/People';



function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
 
    <Route path='movies' element={<Movies/>}/>
    <Route path='tvshow' element={<Tvshow/>}/>
    <Route path='pepole' element={<People/>}/>
    <Route path="actordetails" element={<ActorDetails />} />
    <Route path='details' element={<MoviesDetalis/>}/>
    <Route path='tvdetalis' element={<TvDetalis/>}/>
    <Route path='/tvdetalis/:id' element={<TvDetalis/>}/>

   
    <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>
</>
);
}
export default App;