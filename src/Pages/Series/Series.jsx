import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomPagiantion from '../../Components/Pagination/CustomPagiantion';
import SingleContent from '../../Components/SingleContent/SingleContent';

const Series = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setnumOfPages] = useState([]);

    const fetchSeries = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=ec227bca234ffe24cdf4bb870eaba716&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);

        console.log(data);
        setContent(data.results);
        setnumOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchSeries()
    }, [page]);

    return (
        <div>
            <span className='pageTitle'>
                TV Series
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
                            media_type="tv"
                            vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Series