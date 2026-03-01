import { useState } from "react"
import Button from "../ui/Button"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function NamesScreen({ namesList, favoritesList, setFavoritesList, setScreen }) {


    const [currentIndex, setCurrentIndex] = useState(0)
    const currentName = namesList[currentIndex].name  // derive name from index
    const currentNationality = namesList[currentIndex].nationality  // derive nationality from index
    const currentGender = namesList[currentIndex].gender  // derive gender

    const handleNext = () => {
        console.log('Next button clicked')
        const nextIndex = (currentIndex + 1) % namesList.length
        setCurrentIndex(nextIndex)
    }
    const handlePrevious = () => {
        console.log('Previous button clicked')
        const previousIndex = (currentIndex - 1 + namesList.length) % namesList.length
        setCurrentIndex(previousIndex)
    }

    const addToFavorites = () => {
        console.log('Add to favorites clicked')
        if (isAlreadyFavorited) return  // reuse the same check instead of duplicating logic
        setFavoritesList([...favoritesList, namesList[currentIndex]])  // store the whole object
    }

    const isAlreadyFavorited = favoritesList.some(fav => fav.name === namesList[currentIndex].name)

    const flagEmoji = {
        american: '🇺🇸',
        danish: '🇩🇰',
        finnish: '🇫🇮',
    }

    const genderEmoji = {
        boy: '👦',
        girl: '👧',
        neutral: '⚧️',
    }

    return (
        <>
            <div className="flex-wrapper">
                <Button className="previous-button" onClick={handlePrevious}>
                    <HiChevronLeft />
                    Previous
                </Button>
                <h1>{currentName} {flagEmoji[currentNationality]} {genderEmoji[currentGender]}</h1>
                <Button className="next-button" onClick={handleNext}>
                    Next
                    <HiChevronRight />
                </Button>
            </div >

            <div className="controls">
                <Button onClick={addToFavorites} disabled={isAlreadyFavorited}>
                    {isAlreadyFavorited ? 'Added to favorites ✅' : 'Add to favorites ❤️'}
                </Button>
                <Button onClick={() => setScreen('favorites')}>See your favorites 📝</Button>
            </div>
        </>
    )
}