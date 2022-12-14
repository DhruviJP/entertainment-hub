import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomPagination from '../../Components/Pagination/CustomPagiantion';
import SingleContent from '../../Components/SingleContent/SingleContent';

const Series = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setnumOfPages] = useState([]);

    const fetchSeries = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);



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
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={500} />
            )}
        </div>
    )
}

export default Series