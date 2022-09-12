import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import SingleContent from '../../Components/SingleContent/SingleContent';
import './Trending.css';
import CustomPagiantion from '../../Components/Pagination/CustomPagiantion';

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchtrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=ec227bca234ffe24cdf4bb870eaba716&page${page}`);

        setContent(data.results);
        console.log(data.results);
    }
    useEffect(() => {
        fetchtrending()
    }, [page]);
    return (
        <div>
            <span className='pageTitle'>
                Trending
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
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagiantion setPage={setPage} />
        </div >
    )
}

export default Trending