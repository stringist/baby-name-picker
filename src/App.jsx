import React from 'react'
import './styles/App.css'
import WelcomeScreen from './components/screens/WelcomeScreen'
import NamesScreen from './components/screens/NamesScreen'
import FavoritesScreen from './components/screens/FavoritesScreen'
import Options from './components/ui/Options'
import { names } from './data/names.js'


function App() {
  const [screen, setScreen] = React.useState('showNames')
  const [namesList, setNamesList] = React.useState(names)

  const [filters, setFilters] = React.useState({
    gender: 'all',
    nationality: 'all',
    vibe: 'all',
    sortBy: 'alphabetical'
  })

  const applyFilters = (namesList, filters) => {
    let filtered = [...namesList]

    // Apply new filter logic here
  }

  const applySorting = (sortBy) => {

    if (sortBy === 'random') {
      console.log('Randomizing names...')
      setNamesList(prevList => [...prevList].sort(() => Math.random() - 0.5))
    }

    // Apply new sorting logic here
  }



  const [favoritesList, setFavoritesList] = React.useState([])


  return (
    <>
      {screen === 'welcome' &&
        <div className="welcome-screen">

          <WelcomeScreen />

          <Options
            applyFilters={applyFilters}
            applySorting={applySorting}
            namesList={namesList}
          />
        </div>
      }
      {screen === 'showNames' &&
        <div className="names-screen">

          <NamesScreen
            namesList={namesList}
            favoritesList={favoritesList}
            setFavoritesList={setFavoritesList}
            setScreen={setScreen} />

          <Options
            applyFilters={applyFilters}
            applySorting={applySorting}
            namesList={namesList}
          />
        </div>
      }

      {screen === 'favorites' &&
        <div className="favorites-screen">
          <FavoritesScreen
            favoritesList={favoritesList}
            setScreen={setScreen} />
        </div>}

    </>
  )
}

export default App