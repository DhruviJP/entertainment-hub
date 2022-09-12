import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { img_500, unavailable } from '../../Config/Config';
import "./ContentModal.css";
import { BsYoutube } from "react-icons/bs";
import Carousel from '../Carousel/Carousel';

function ContentModal({ children, media_type, id }) {

    const [content, setContent] = useState();
    const [video, setVideo] = useState();
    const [page, setPage] = useState(1);
    const [lgShow, setLgShow] = useState(false);

    const fetchData = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=ec227bca234ffe24cdf4bb870eaba716&page${page}`);

        setContent(data);

    }
    const fetchVideo = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=ec227bca234ffe24cdf4bb870eaba716&page${page}`);
        console.log(data);
        setVideo(data.result[0]?.key);
    }

    useEffect(() => {
        fetchData()
        fetchVideo()
    }, []);

    return (

        <>

            <div variant="primary" onClick={() => setLgShow(true)} className="media">
                {children}
            </div>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                {/* <Modal.Header closeButton>

                </Modal.Header> */}
                <Modal.Body>
                    {content && (
                        <div className='ContentModal'>
                            <img className='ContentModal__portrait'
                                src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable}
                                alt={content.title || content.name} />
                            <img className='ContentModal__landscape'
                                src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailable}
                                alt={content.title || content.name} />
                            <div className="ContentModal__about">
                                <span className="ContentModal__title">
                                    {content.name || content.title} (
                                    {(
                                        content.first_air_date ||
                                        content.release_date ||
                                        "-----"
                                    ).substring(0, 4)}
                                    )
                                </span>
                                {content.tagline && (
                                    <i className="tagline">{content.tagline}</i>
                                )}

                                <span className="ContentModal__description">
                                    {content.overview}
                                </span>

                                <div>
                                    <Carousel media_type={media_type} id={id} />
                                </div>
                                <Button variant="outline-primary" target="__blank" href={`https://www.youtube.com/watch?v=${video}`} ><BsYoutube /> Watch the trailer</Button>{' '}


                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ContentModal