import  axios  from '../axios';
import { useState, useEffect } from 'react';
import './row.css';
import { Route, Link } from 'react-router-dom';
import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
function Row( {title,fetchUrl}) {
    function redirect(){
        <BrowserRouter>
        <Routes>
            <Route path='/movie'>
                <h1>asdfghjklmnbvcxz</h1>
            </Route>
        </Routes>
        </BrowserRouter>

    }
    const [movies,setmovies]=useState([]);

    useEffect(() => {

        async function fetchdata(){
        const request = await axios.get(fetchUrl);
         setmovies(request.data.results);
         console.log(request);
         return request;
        }
        fetchdata();
    } , [fetchUrl]);
    console.table(movies)
  return (
    <div className="row">
        <h2> {title}</h2>
        <div className="row_posters">
           {movies.map(movie =>(
            <button onClick={redirect}> <img  className="row_poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name}/></button>
            ))}
             

        </div>
    </div>
  )
}

export default Row;
