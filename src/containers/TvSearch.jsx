import React, { useState } from 'react'
import Main from './Main';
import Favorites from './Favorites';
import ToWatch from './ToWatch';

export default function TvSearch() {
    const [favorites, setFavorites] = useState([])
    const [watchLater, setWatchLater] = useState([])

    const handleShowFavorited = (id) => {
        if (favorites.includes(id)) {
            const newFavs = favorites.filter((fav) => fav !== id);
            setFavorites(newFavs)
        } else {
            setFavorites([...favorites, id]);
        }
    }

    const handleToWatchLater = (showData) => {
        console.log(showData, watchLater);
        if (watchLater.find((show) => show.id === showData.id)) {
            const newWatchLater = watchLater.filter((show) => show.id !== showData.id);
            setWatchLater(newWatchLater);
        } else {
            setWatchLater([...watchLater, showData])
        }
    }

    return(
        <>
            <ToWatch
                watchLater={watchLater}
                handleToWatchLater={handleToWatchLater}
            />
            <Main
                handleShowFavorited={handleShowFavorited}
                handleToWatchLater={handleToWatchLater}
                favorites={favorites}
            />
        </>
    )
}