import { useState, useContext } from "react"
import Alert from "./Alert";

// Context
import ShowsContext from "../context/shows/showsContext";

const SearchBar = () => {
    
    const [searchTerm, setSearchTerm] = useState('');

    const { searchShows } = useContext(ShowsContext);

    const searchHandler = (e) => {
        e.preventDefault()

        searchShows(searchTerm);
    }

    return (
        <div className='search-container'>
            <Alert 
                type='danger'
                message={'This is an alert'}
            />
            <form>
                <input
                    type='text'
                    placeholder='Search for your fav movies &amp; series...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='search-bar'
                />
                <button onClick={searchHandler} className='search-btn'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
