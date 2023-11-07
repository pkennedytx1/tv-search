import React, { useState, useEffect, useContext } from 'react';
import SearchInput from '../component/SearchInput';
import SearchList from './SearchList';
import { PageHeader } from '../component/STitle';
import axios from 'axios';
import { ShowContext } from '../contexts/ShowContext';

export default function Main({
    handleShowFavorited,
    handleToWatchLater,
    favorites
}) {
    const { setSearchTerm } = useContext(ShowContext);
    const [searchTermInput, setSearchTermInput] = useState('');
    const [isSearchTermValid, setIsSearchTermValid] = useState(true);
    
    const searchShow = (term) => {
        if (!term) {
            setIsSearchTermValid(false);
            return false;
        }
        setSearchTerm(term)
        setSearchTermInput('')
    }

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
                handleShowFavorited={handleShowFavorited}
                handleToWatchLater={handleToWatchLater}
                favorites={favorites}
            />
        </div>
    )
}