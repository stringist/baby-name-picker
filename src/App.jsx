import React from 'react'
import './styles/App.css'
import WelcomeScreen from './components/screens/WelcomeScreen'
import ShowNamesScreen from './components/screens/NamesScreen'
import FavoritesScreen from './components/screens/FavoritesScreen'
import Options from './components/ui/Options'
import { names } from './data/names.js'

const ScreenContext = React.createContext()

function App() {
  const [currentScreen, setCurrentScreen] = React.useState('showNames')
  const [namesList, setNamesList] = React.useState(names)
  const [favoritesList, setFavoritesList] = React.useState([])

  /*
  * Component Structure:
  *
  * ├── WelcomeScreen (1st screen)
  * │   └── ButtonGroup
  * │       ├── AllNamesButton
  * │       ├── MaleNamesButton
  * │       ├── FemaleNamesButton
  * │       └── MoreOptionsButton
  * │           └── OptionsDropdown
  * │
  * ├── ShowNamesScreen (2nd screen)
  * │   ├── PreviousButton
  * │   ├── NextButton
  * │   ├── NameCard (current)
  * │   ├── ChooseNameButton (saves name to favorites)
  * │   └── ChangeOptionsButton (returns to WelcomeScreen)
  * │
  * └── FavoritesScreen (3rd screen)
  *     ├── FavoritesList
  *     │   └── NameCard
  *     │       └── RemoveFromFavoritesButton
  *     └── BackToNamesButton
  */

  return (
    <>
      {currentScreen === 'welcome' && <WelcomeScreen />}
      {currentScreen === 'showNames' && <ShowNamesScreen namesList={namesList} favoritesList={favoritesList} setFavoritesList={setFavoritesList} />}
     <Options />
      {<FavoritesScreen favoritesList={favoritesList} />}
    </>
  )
}

export default App
export { ScreenContext }