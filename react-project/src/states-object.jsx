import { useState } from 'react';

const StateObjectApp = () => {

    const [movie, setmovie] = useState({ title: "Black Panther", genre: "Action, Adventure", rating: 7.3, director: "Ryan Coogler" })

    const handleClick = () => {
        // const copyMovie = {
        //     ...movie,
        //     rating: 5
        // }
        setmovie({...movie, rating: 5})
    }

    return (
        <section>
            <h1>The movie today is {movie.title}</h1>
            <p>The rating is {movie.rating}</p>
            <button onClick={handleClick}>Change rating</button>
        </section>
    )
}

export default StateObjectApp;