import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from "../../Config/Config";

const handleDragStart = (e) => e.preventDefault();


const Carousel = ({ media_type, id }) => {

    const [credits, setCredits] = useState();

    const items = credits?.map((c) => (
        <div className="carouselItem">
            <img
                src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
                alt={c?.name}
                onDragStart={handleDragStart}
                className="carouselItem__img"
            />
            <b className="carouselItem__txt">{c?.name}</b>
        </div>
    ));


    const fetchCredits = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits/?api_key=ec227bca234ffe24cdf4bb870eaba716&language=en-US`);
        setCredits(data.cast);
    }

    useEffect(() => {
        fetchCredits();
    }, []);

    return (
        <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            items={items}
            autoPlay
        />
    );
}

export default Carousel;