import { useState, useContext } from "react"
import Alert from "./Alert";

// Context
import ShowsContext from "../context/shows/showsContext";
import AlertsContext from "../context/alerts/alertsContext";

const SearchBar = () => {
    
    const [searchTerm, setSearchTerm] = useState('');

    const { searchShows } = useContext(ShowsContext);

    const { alert, setAlert } = useContext(AlertsContext);

    const searchHandler = (e) => {
        e.preventDefault()

        if(searchTerm === '') {
            setAlert('please enter something', 'danger')
        } else {
            searchShows(searchTerm);
        }
    }

    return (
        <div className='search-container'>
            { alert && 
                <Alert 
                    type={alert.type}
                    message={alert.message}
                /> 
            }
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
