import React from 'react';
import SearchIcon from '../assets/search.svg';

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            <div>
                <img src={SearchIcon} alt="Search Icon" />

                <input
                    type="text"
                    placeholder="Search through thoudsands of movies"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
        </div>
    );
};

export default Search;
