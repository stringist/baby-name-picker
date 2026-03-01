import Button from './Button'
import './ui.css'

export default function Options({ sortOrder, setSortOrder, filters, setFilters }) {

    const getAlphaSortOrder = () => {
        return sortOrder === 'a-z' ? 'z-a' : 'a-z'
    }
    const latinLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
    const nordicLetters = ['Æ', 'Ø', 'Å', 'Ä', 'Ö', 'Ü']
    const letters = [...latinLetters, ...nordicLetters]

    return (
        <fieldset className="options-wrapper">
            <legend>Options</legend>
            <label htmlFor="gender">Baby gender:
                <select
                    id="gender"
                    name="gender"
                    value={filters.gender}
                    onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}>
                    <option value="all">Any</option>
                    <option value="boy">Boy names</option>
                    <option value="girl">Girl names</option>
                    <option value="neutral">Gender-neutral names</option>
                </select>
            </label>
            <label htmlFor="nationality">Nationality:
                <select
                    id="nationality"
                    name="nationality"
                    value={filters.nationality}
                    onChange={(e) => setFilters(prev => ({ ...prev, nationality: e.target.value }))}>
                    <option value="all">Any</option>
                    <option value="american">American</option>
                    <option value="danish">Danish</option>
                    <option value="finnish">Finnish</option>
                </select>
            </label>
            <label htmlFor="firstLetter">First letter:
                <select
                    id="firstLetter"
                    name="firstLetter"
                    value={filters.firstLetter}
                    onChange={(e) => setFilters(prev => ({ ...prev, firstLetter: e.target.value }))}>
                    <option value="all">Any</option>
                    {letters.map(letter => (
                        <option key={letter} value={letter}>{letter}</option>
                    ))}
                </select>
            </label>

            <Button onClick={() => setSortOrder(getAlphaSortOrder())}>
                {sortOrder === 'a-z' ? 'Sort Z-A' : 'Sort A-Z'}
            </Button>
            <Button onClick={() => setSortOrder('random')}>
                Random order
            </Button>
        </fieldset>
    )
}