import React, { createContext, useMemo, useState, useEffect } from 'react'
import axios from 'axios';

export const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
    const [showData, setShowData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (searchTerm) {
            searchTVShow();
        }
    // eslint-disable-next-line
    }, [searchTerm])

    const searchTVShow = async () => {
        const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
        setShowData(data);
    }

    const showContext = useMemo(() => ({
        showData,
        setShowData,
        searchTerm,
        setSearchTerm
    }), [showData, setShowData, searchTerm, setSearchTerm]);
    
    return(
        <ShowContext.Provider value={showContext}>
            {children}
        </ShowContext.Provider>
    )
}