import { useEffect, useContext } from 'react'
import Loading from '../components/Loading'

// Context
import ShowsContext from '../context/shows/showsContext';

const SinglePage = ({ match }) => {

    const { singleShow, getSingleShow, loading } = useContext(ShowsContext);

    useEffect(() => {
        getSingleShow(match.params.id);

        // eslint-disable-next-line
    }, [])

    return (
        <>
            { loading ? <Loading /> :
                <div className='single-page'>
                    <h1>{singleShow.name}</h1>
                    <img 
                        src={singleShow.image ? singleShow.image.medium : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'}
                        alt="Show poster" 
                        style={singleShow.image ? {} : {width: '210px', height: '295px', objectFit: 'cover'}}
                    />
                </div>
            }
        </>
    )
}

export default SinglePage
