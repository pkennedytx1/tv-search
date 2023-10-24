import React, { useState, useEffect } from 'react';
import SearchInput from '../component/SearchInput';
import SearchList from './SearchList';
import { PageHeader } from '../component/STitle';
import axios from 'axios';

export default function Main({
    handleShowFavorited,
    handleToWatchLater,
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
        <div>
            <PageHeader>
                TV Show Search
            </PageHeader>
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
                handleToWatchLater={handleToWatchLater}
                favorites={favorites}
            />
        </div>
    )
}