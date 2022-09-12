import React, { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs";
import "./Search.css";
import axios from 'axios';
import SingleContent from '../../Components/SingleContent/SingleContent';
import { Form, FormControl, Button } from "react-bootstrap";


const Search = () => {

    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState(" ");
    const [content, setContent] = useState("");


    const fetchSearch = (async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=ec227bca234ffe24cdf4bb870eaba716&query=${searchText}`)

        console.log(data);
        setContent(data.results);
    })

    useEffect(() => {
        fetchSearch()
    }, [type, searchText]);

    // const changeHandler = (e) => {
    //     setQuery(e.target.value);
    // };

    return (
        <div>
            <span className='pageTitle'>
                Search
            </span>

            <Form
                className="searchForm"
                onSubmit={fetchSearch}
            >
                <FormControl
                    type="search"
                    placeholder="Search Movie"
                    name="searchText"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button type="submit" className="bg-white" onClick={fetchSearch}><BsSearch /></Button>
            </Form>

            <div>
                <span className='pageTitle'>

                </span>

                <div className="trending">
                    {content &&
                        content.map((c) => (
                            <SingleContent
                                key={c.id}
                                id={c.id}
                                poster={c.poster_path}
                                title={c.title || c.name}
                                date={c.first_air_date || c.release_date}
                                media_type={type ? "tv" : "movie"}
                                vote_average={c.vote_average}
                            />
                        ))}
                    {searchText &&
                        !content &&
                        (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
                </div>
            </div>
        </div>
    )
}

export default Search