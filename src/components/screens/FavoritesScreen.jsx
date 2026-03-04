import React, { useState } from "react"
import Button from "../ui/Button"
import FavoritesListItem from "../ui/FavoritesListItem"
import './FavoritesScreen.css'

export default function FavoritesScreen({ favoritesList, setScreen }) {
    return (
        <div className="favorites-screen">
            <h1>Your Favorite Names</h1>
            {favoritesList.length === 0 ? (
                <p>You haven't added any names to your favorites yet.</p>
            ) : (
                <ul>
                    {favoritesList.map((fav, index) => (
                        <FavoritesListItem key={index} name={fav.name} nationality={fav.nationality} gender={fav.gender} />
                    ))}
                </ul>
            )}
            <Button onClick={() => setScreen('showNames')}>Back to names</Button>
        </div>
    )
}