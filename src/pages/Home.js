import { useContext } from "react"

// Context
import ShowsContext from "../context/shows/showsContext"

// Comps
import SearchBar from "../components/SearchBar"
import SingleItem from "../components/SingleItem";
import Loading from "../components/Loading";


const Home = () => {

    const {loading, shows} = useContext(ShowsContext);

    return (
        <>
            <SearchBar />
            {loading ? <Loading /> :
                <div className='shows-container'>
                    { shows &&
                        ( shows.length > 0 ?
                            shows.map(item => (
                                <SingleItem 
                                    key={item.show.id}
                                    id={item.show.id}
                                    name={item.show.name}
                                    image={item.show.image}
                                    rating={item.show.rating.average ? item.show.rating.average : 'No rating'}
                                />
                            ))
                            : <p className='not-available' >No available content</p>
                        )
                    }
                </div>
            }
        </>
    )
}

export default Home
