import { useState } from "react"
import Button from "../ui/Button"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function NamesScreen({ namesList, favoritesList, setFavoritesList }) {


    const [currentIndex, setCurrentIndex] = useState(0)
    const currentName = namesList[currentIndex].name  // derive name from index

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


    return (
        <div className="names-screen">
            <div className="content-wrapper">
                <Button onClick={handlePrevious}>
                    <HiChevronLeft />
                    Previous
                </Button>
                <h1>{currentName}</h1>
                <Button onClick={handleNext}>
                    Next
                    <HiChevronRight />
                </Button>
            </div>
            <div className="controls">
                <Button onClick={addToFavorites} disabled={isAlreadyFavorited}>
                    {isAlreadyFavorited ? 'Added to favorites ✅' : 'Add to favorites ❤️'}
                </Button>
            </div>
        </div>
    )
}