import React, { useState, useMemo } from 'react'
import Main from './Main';
import Favorites from './Favorites';
import ToWatch from './ToWatch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navigation from '../component/Navigation';

export default function TvSearch() {
    const [favorites, setFavorites] = useState([])
    const [watchLater, setWatchLater] = useState([])

    const handleShowFavorited = (showData) => {
        console.log(showData);
        const { id } = showData
        if (favorites.find((show) => show.id === id)) {
            const newFavs = favorites.filter((fav) => fav.id !== id);
            setFavorites(newFavs)
        } else {
            setFavorites([...favorites, showData]);
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

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:
                <>
                    <Navigation />
                    <Main
                        handleShowFavorited={handleShowFavorited}
                        handleToWatchLater={handleToWatchLater}
                        favorites={favorites}
                    />
                </>
        },
        {
            path: "/favorites",
            element:
                <>
                    <Navigation />
                    <Favorites favorites={favorites} />
                </>
        },
        {
            path: "/watch_later",
            element:
                <>
                    <Navigation />
                    <ToWatch
                        watchLater={watchLater}
                        handleToWatchLater={handleToWatchLater}
                    />
                </>
        }
    ]);

    return(
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}