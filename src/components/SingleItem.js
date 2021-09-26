import { Link } from "react-router-dom"

const SingleItem = ({ name, image, rating, id }) => {
    return (
        <Link to={`/singleshow/${id}`} className='single-item'>
            <h3 className='rating' style={rating < 6 ? {background: '#f81313'} : rating > 6 ? {background: '#3555f8'} : {background: '#222121'}}>{rating}</h3>
            <img 
                src={image ? image.medium : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'} 
                alt={name} 
                style={image ? {} : {width: '210px', height: '295px', objectFit: 'cover'}}
            />
            <h2>{name.length < 23 ? name : `${name.substring(0, 24)}...` }</h2>
        </Link>
    )
}

export default SingleItem
