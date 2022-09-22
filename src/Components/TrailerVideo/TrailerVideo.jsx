import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsYoutube } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const TrailerVideo = ({ media_type, id }) => {

    const [video, setVideo] = useState();
    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setVideo(data.results[0]?.key);
        console.log(data.results);
    };

    useEffect(() => {
        fetchVideo()
    }, [id]);

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                target="__blank"
                href={`https://www.youtube.com/watch?v=${video}`}
            >
                <BsYoutube /> Watch the Trailer
            </Button>
        </div>
    )
}

export default TrailerVideo