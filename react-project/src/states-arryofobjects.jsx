import { useState } from 'react';

const StateObjectArrayApp = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "The Lion King",
            year: 1994,
            genre: "Animation, Drama",
            rating: 8.5,
            director: "Roger Allers"
        },
        {
            id: 2,
            title: "Get Out",
            year: 2017,
            genre: "Horror, Mystery",
            rating: 7.7,
            director: "Jordan Peele"
        },
        {
            id: 3,
            title: "Queen of Katwe",
            year: 2016,
            genre: "Biography, Drama",
            rating: 7.4,
            director: "Mira Nair"
        }
    ])

    const handleClick = () => {
        setMovies(movies.map(movie => movie.rating === 7.4 ? {...movies, title: "Queen of Tifa"} : movie))
    }

    return (
        <section>
            {movies.map(
                movie => (
                    <li key={movie.id}>{movie.title}</li>
                )
            )}
            <button onClick={handleClick}>Change Name</button>
        </section>
    )
}

export default StateObjectArrayApp;