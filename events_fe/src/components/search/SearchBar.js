
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Perform search or other actions based on the searchTerm
        console.log('Searching for:', searchTerm);
        // You can add more logic here, like making an API request for search results.
    };

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    return (
        <div className={`search-container ${isSearchVisible ? 'open' : 'closed'}`}>
            <div className="search-input-container">
                <button onClick={toggleSearch} className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                     Search
                </button>
                {isSearchVisible && (
                    <input
                        type="text"
                        placeholder="Type your search..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="search-input"
                    />
                )}
            </div>
        </div>
    );
};

export default SearchBar;