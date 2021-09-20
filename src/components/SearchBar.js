import { useState } from "react"

const SearchBar = () => {
    
    const [searchTerm, setSearchTerm] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()
        console.log(`searching for: ${searchTerm}`)
    }

    return (
        <form className='search-container'>
            <input
                type='text'
                placeholder='Search for your fav movies &amp; series...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='search-bar'
            />
            <button onClick={searchHandler} className='search-btn'>Search</button>
        </form>
    )
}

export default SearchBar
