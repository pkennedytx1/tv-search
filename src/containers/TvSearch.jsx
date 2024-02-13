import React, { useState, useEffect } from 'react'
import Main from './Main';
import Favorites from './Favorites';
import ToWatch from './ToWatch';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Navigation from '../component/Navigation';
import { ShowProvider } from '../contexts/ShowContext';
import { createWatchLater, getAllWatchLater } from '../utils/endpoints/toWatchLater.js';
import { getFavorites } from '../utils/endpoints/favorites.js';
import Auth from './Auth.jsx';
import PrivateRoute from '../component/PrivateRoute.jsx';

export default function TvSearch() {
    const [favorites, setFavorites] = useState([])
    const [watchLater, setWatchLater] = useState([])

    useEffect(() => {
        getFavorites()
    }, [])

    const handleShowFavorited = async (showData) => {
        console.log(showData);
        const { id } = showData
        if (favorites.find((show) => show.id === id)) {
            const newFavs = favorites.filter((fav) => fav.id !== id);
            // Favorites POST
            setFavorites(newFavs)
        } else {
            // Favorites POST
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
                <PrivateRoute>
                    <Navigation />
                    <Favorites favorites={favorites} />
                </PrivateRoute>
        },
        {
            path: "/watch_later",
            element:
                <PrivateRoute>
                    <Navigation />
                    <ToWatch
                        watchLater={watchLater}
                        handleToWatchLater={handleToWatchLater}
                    />
                </PrivateRoute>
        },
        {
            path: "/auth",
            element:
                <>
                    <Navigation />
                    <Auth />
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