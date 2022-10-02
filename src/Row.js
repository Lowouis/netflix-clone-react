import React, {useEffect, useState} from "react";
import "./row.css"
import axios from "./axios";

function Row({title, fetchUrl, isLargeRow = false}){
    const [movies, setMovies] = useState([]);
    const baseURL = "https://image.tmdb.org/t/p/original/"
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    },[fetchUrl])


   movies.map((movie) => {
       console.log(movie.poster_path)
   })





    return (
        <div className="row">
            <h2 className="movie__title">{title}</h2>
            <div className="row__posters">
            {movies.map((movie) => (
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    <img
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                )))}
            </div>
        </div>
    )
}

export default Row;