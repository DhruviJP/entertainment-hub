import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomPagination from '../../Components/Pagination/CustomPagiantion';
import SingleContent from '../../Components/SingleContent/SingleContent';

const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setnumOfPages] = useState([]);

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`);

        console.log(data);
        setContent(data.results);
        setnumOfPages(data.total_pages);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies()
    }, [page]);
    return (
        <div>
            <span className='pageTitle'>
                Movies
            </span>

            <div className='trending'>
                {
                    content && content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="movie"
                            vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={500} />
            )}
        </div>
    )
}

export default Movies