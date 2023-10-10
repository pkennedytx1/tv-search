import React, { useState } from 'react'
import Main from './Main';
import Favorites from './Favorites';

export default function TvSearch() {
    const [favorites, setFavorites] = useState([])

    const handleShowFavorited = (id) => {
        setFavorites([...favorites, id]);
    }

    console.log(favorites)

    return(
        <>
            <Favorites />
            <Main
                handleShowFavorited={handleShowFavorited}
                favorites={favorites}
            />
        </>
    )
}