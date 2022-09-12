import React from 'react'
import { Badge } from 'react-bootstrap';
import { img_300, unavailable } from '../../Config/Config';
import ContentModal from '../ContentModal/ContentModal';
import './SingleContent.css';

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
            <ContentModal media_type={media_type} id={id}>

                <Badge pill>
                    {vote_average}
                </Badge>{''}
                <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
                <b className='title'>{title}</b>
                <span className='subTitle'>{media_type === 'tv' ? 'TV Series' : 'Movie'}

                    <span className='subTitle'>
                        {date}
                    </span></span>
            </ContentModal>
        </>
    )
}

export default SingleContent