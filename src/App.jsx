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



  const [sortOrder, setSortOrder] = React.useState('a-z')
  const [filters, setFilters] = React.useState({
    gender: 'all',
    nationality: 'all',
    vibe: 'all'
  })

  // names imported from data file never changes, 
  // displayedNames is derived from it whenever sort or filters change
  const displayedNames = React.useMemo(() => {
    let result = [...names]

    // apply filters
    if (filters.gender !== 'all') {
      result = result.filter(name => name.gender === filters.gender)
    }
    if (filters.nationality !== 'all') {
      result = result.filter(name => name.nationality.includes(filters.nationality))
    }

    // apply sorting
    if (sortOrder === 'a-z') result.sort((a, b) => a.name.localeCompare(b.name))
    if (sortOrder === 'z-a') result.sort((a, b) => b.name.localeCompare(a.name))
    if (sortOrder === 'random') result.sort(() => Math.random() - 0.5)

    return result
  }, [sortOrder, filters])
  // // Filters state and function
  // const [filters, setFilters] = React.useState({
  //   gender: 'all',
  //   nationality: 'all',
  //   vibe: 'all'
  // })

  // const applyFilters = (namesList, filters) => {
  //   let filtered = [...namesList]

  //   // Apply new filter logic here
  // }

  // // Sorting state and function
  // const [sortOrder, setSortOrder] = React.useState('a-z')  // initial sort order

  // const applySorting = (sortBy) => {
  //   setSortOrder(sortBy)
  //   setNamesList(prevList => {
  //     const sorted = [...prevList]
  //     if (sortBy === 'random') return sorted.sort(() => Math.random() - 0.5)
  //     if (sortBy === 'a-z') return sorted.sort((a, b) => a.name.localeCompare(b.name))
  //     if (sortBy === 'z-a') return sorted.sort((a, b) => b.name.localeCompare(a.name))
  //     return sorted
  //   })
  // }


  const [favoritesList, setFavoritesList] = React.useState([])


  return (
    <>
      {screen === 'welcome' &&
        <div className="welcome-screen">

          <WelcomeScreen />

          <Options
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      }
      {screen === 'showNames' &&
        <div className="names-screen">

          <NamesScreen
            namesList={displayedNames}
            favoritesList={favoritesList}
            setFavoritesList={setFavoritesList}
            setScreen={setScreen} />

          <Options
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            filters={filters}
            setFilters={setFilters}
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