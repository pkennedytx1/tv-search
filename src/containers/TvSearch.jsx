import React, { useState, useEffect } from 'react'
import Main from './Main';
import Favorites from './Favorites';
import ToWatch from './ToWatch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navigation from '../component/Navigation';
import { ShowProvider } from '../contexts/ShowContext';
import { createWatchLater, getAllWatchLater } from '../utils/endpoints/toWatchLater.js';

export default function TvSearch() {
    const [favorites, setFavorites] = useState([])
    const [watchLater, setWatchLater] = useState([])

    useEffect(() => {
        handleGetWatchLater();
    }, [])

    const handleGetWatchLater = async () => {
        const watchLaterData = await getAllWatchLater();
        setWatchLater(watchLaterData);
    }

    const handleShowFavorited = async (showData) => {
        console.log(showData);
        const { id } = showData
        if (favorites.find((show) => show.id === id)) {
            const newFavs = favorites.filter((fav) => fav.id !== id);
            setFavorites(newFavs)
        } else {
            setFavorites([...favorites, showData]);
        }
    }

    const handleToWatchLater = async (showData) => {
        console.log(showData, watchLater);
        if (watchLater.find((show) => show.id === showData.id)) {
            const newWatchLater = watchLater.filter((show) => show.id !== showData.id);
            setWatchLater(newWatchLater);
        } else {
            setWatchLater([...watchLater, showData])
            await createWatchLater({ tv_maze_id: showData.id, imdb_id: showData.imdb, show_name: showData.name})
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
            <ShowProvider>
                <RouterProvider router={appRouter} />
            </ShowProvider>
        </>
    )
}