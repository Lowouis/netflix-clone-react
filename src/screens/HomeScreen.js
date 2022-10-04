import React from "react";
import './homescreen.css'
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Request";


function HomeScreen(){

    return (
        <div className="homescreen">
            <Nav />
            <Banner />
            <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginal} isLargeRow="true"/>
            <Row title='Trending Now' fetchUrl={requests.fetchTopRated}/>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Action Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Romances Movies' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen