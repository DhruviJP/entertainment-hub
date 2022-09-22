import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { img_500, unavailable } from '../../Config/Config';
import "./DetailsPage.css";
import dateFormat from "dateformat";
import Carousel from '../Carousel/Carousel';
import TrailerVideo from '../TrailerVideo/TrailerVideo';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import grad from 'gradient-from-image'

function DetailsPage() {

    // const [type, setType] = useState(0);
    const { id } = useParams()
    const [content, setContent] = useState([]);
    const media_type = "movie";

    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "m";
    }


    // grad?.gr(`${img_original}/${content.backdrop_path}`).then((gr, mode) => {
    //     console.log(gr);
    //     mode = "no-cors";
    //     let bg = "linear-gradient(" + gr.vibrant + ")";
    //     let el = document?.querySelector(".wrapepr_main");
    //     el.style.background = bg;
    //     console.log(bg);
    // });



    const fetchData = async () => {

        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=ec227bca234ffe24cdf4bb870eaba716`);

        setContent(data);
        console.log(data);

    }



    useEffect(() => {
        fetchData()
    }, [id]);

    return (


        <>

            <div className=''>

                <div className='custom_container'>
                    {content && (
                        <>
                            <div className='bg_main'
                            // style={
                            //     {
                            //         backgroundImage: `url(${img_original}/${content.backdrop_path})`,
                            //         backgroundSize: '100%',
                            //         backgroundRepeat: 'no-repeat',
                            //         color: '#fff',
                            //     }
                            // }
                            >
                                <div className='wrapepr_main'
                                // style={
                                //     {
                                //         background: `linear-gradient`,
                                //     }
                                // }
                                >
                                    <div>
                                        <img className='ContentModal__portrait'
                                            src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable}
                                            alt={content.title || content.name} />
                                        <img className='ContentModal__landscape'
                                            src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailable}
                                            alt={content.title || content.name} />
                                    </div>
                                    <div>
                                        <h2>{content.original_title}<span>({content?.release_date?.substring(0, 4)})</span></h2>
                                        <span>
                                            {dateFormat(content.release_date, "mmmm dS, yyyy")}<span>({content.original_language})</span>
                                        </span>
                                        <p>
                                            {timeConvert(content.runtime)}
                                        </p>
                                        <p className='genres_name'>~
                                            {content?.genres?.map((c, index) => {
                                                return <span key={c.id}>{(index ? ", " : "") + c.name}</span>;
                                            })}

                                        </p>
                                        <p className='production_comanies_name'>~
                                            {content?.production_companies?.map((p, index) => {
                                                return <span key={p.id}>{(index ? ", " : "") + p.name}</span>;
                                            })}

                                        </p>
                                        <p className='progress_circle'>
                                            <CircularProgressbar value={content?.vote_average * 10} text={content?.vote_average?.toFixed(1) * 10 + "%"} />
                                        </p>
                                        <p className='tagline'>{content.tagline}</p>
                                        <p>
                                            <span className='overview_title'>Overview</span>
                                            {content.overview}
                                        </p>
                                        <p className=''><b>Status: </b>{content.status}</p>
                                        <div className='watch_video'>
                                            <TrailerVideo media_type={media_type} id={id} />
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div>
                                <Carousel media_type={media_type} id={id} />
                            </div>

                        </>

                    )}
                </div>

            </div>
        </>
    )
}

export default DetailsPage