import React from 'react'
import { Badge } from 'react-bootstrap';
import { img_300, unavailable } from '../../Config/Config';
import './SingleContent.css';
import { Link } from 'react-router-dom'
import dateFormat from "dateformat";

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {

    return (
        <>
            <div className='main_wrapper'>
                <div className="media">
                    <Badge pill>
                        {vote_average}
                    </Badge>{''}
                    <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
                    <b className='title'>{title}</b>
                    <p className='d-flex justify-content-between'>
                        {/* <span className='subTitle'>
                            {media_type === "tv" ? "TV Series" : "Movie"}
                        </span> */}
                        <span className='subTitle'>
                            {dateFormat(date, "mmmm dS, yyyy")}
                        </span>
                    </p>
                    <Link to={`/${media_type}/${id}`} className='more_details'>
                        More Details
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SingleContent