import React, { useState, useEffect } from 'react';
import SearchInput from '../component/SearchInput';
import SearchList from './SearchList';
import axios from 'axios'
;
export default function Main({
    handleShowFavorited,
    favorites
}) {
    const [searchTermInput, setSearchTermInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showData, setShowData] = useState([]);
    const [isSearchTermValid, setIsSearchTermValid] = useState(true);
    
    const searchShow = (term) => {
        if (!term) {
            setIsSearchTermValid(false);
            return false;
        }
        setSearchTerm(term)
        setSearchTermInput('')
    }

    const searchTVShow = async () => {
        const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
        setShowData(data);
    }

    useEffect(() => {
        if (searchTerm) {
            searchTVShow();
        }
    }, [searchTerm])

    return(
        <div style={{ margin: '0 auto', maxWidth: '400px', marginTop: '40px' }}>
            <h1 style={{ textAlign: 'center' }} >TV Show Search</h1>
            <SearchInput
                searchTermInput={searchTermInput}
                setSearchTermInput={setSearchTermInput}
                searchShow={searchShow}
                isSearchTermValid={isSearchTermValid}
                setIsSearchTermValid={setIsSearchTermValid}
            />
            <SearchList
                showData={showData}
                searchTerm={searchTerm}
                handleShowFavorited={handleShowFavorited}
                favorites={favorites}
            />
        </div>
    )
}