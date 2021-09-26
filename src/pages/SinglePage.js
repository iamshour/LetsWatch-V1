import { useEffect, useContext } from 'react'
import Loading from '../components/Loading'
import { HiOutlineExternalLink } from "react-icons/hi";
import { FcRating } from "react-icons/fc";
import { AiOutlineGlobal, AiOutlineLink } from "react-icons/ai";
import { GrChannel } from "react-icons/gr";

// Context
import ShowsContext from '../context/shows/showsContext';

const SinglePage = ({ match }) => {

    const { singleShow, getSingleShow, loading } = useContext(ShowsContext);

    useEffect(() => {
        getSingleShow(match.params.id);

        // eslint-disable-next-line
    }, []);

    const removeTags = (text) => {
        if (text === null || text === '') {
            return false
        } else {
            text = text.toString();
        }
        return text.replace( /(<([^>]+)>)/ig, '');
    }

    return (
        <>
            { loading ? <Loading /> :
                <div className='single-page'>
                    <img 
                        src={singleShow.image ? singleShow.image.medium : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'}
                        alt={singleShow.name} 
                        style={singleShow.image ? {} : {width: '210px', height: '295px', objectFit: 'cover'}}
                    />
                    <div className="info">
                        <h1>{singleShow.name}</h1>
                        <div className="genres">
                            { singleShow.genres && 
                                singleShow.genres.map(genre => 
                                    <h4 key={genre}>{genre}</h4>
                                )
                            }
                        </div>
                        <div className="rows-container">
                            <div className='row'>
                                <div className="headline">
                                    <FcRating className='icon' />
                                    <h4>Rating:</h4>
                                </div>
                                { singleShow.rating ? 
                                    ( singleShow.rating.average ?
                                        <p>{singleShow.rating.average}</p>
                                        : <p>No rating available</p>
                                    )
                                    : <p>No rating available</p>
                                }
                            </div>
                            <div className='row'>
                                <div className="headline">
                                    <AiOutlineGlobal className='icon' />
                                    <h4>Country:</h4>
                                </div>
                                { singleShow.webChannel &&
                                    singleShow.webChannel.country ?
                                    (
                                        singleShow.webChannel.country.name ?
                                        <p>{singleShow.webChannel.country.name}</p>
                                        : <p>No info available</p>
                                    )
                                    : <p>No info available</p>
                                }
                            </div>
                            <div className="row">
                                <div className="headline">
                                    <GrChannel className='icon' />
                                    <h4>Network:</h4>
                                </div>
                                { singleShow.webChannel ? 
                                    ( singleShow.webChannel.name ?
                                        <p>{singleShow.webChannel.name}</p>
                                        : <p>No info available</p>
                                    )
                                    : <p>No info available</p>
                                }
                            </div>
                            <div className='row'>
                                <div className="headline">
                                    <AiOutlineLink className='icon' />
                                    <h4>Official Site:</h4>
                                </div>
                                {singleShow.officialSite ?
                                    <a 
                                        href={singleShow.officialSite}
                                        target='_blank' rel='noreferrer'
                                        className='official-site'
                                    >Click here <HiOutlineExternalLink className='icon'/></a>
                                    : <p>Not available</p>
                                }
                            </div>
                        </div>
                        <p className='summary' >
                            {singleShow.summary && removeTags(singleShow.summary)}
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default SinglePage
