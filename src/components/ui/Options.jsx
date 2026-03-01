import Button from './Button'
import './ui.css'

export default function Options({ sortOrder, setSortOrder, filters, setFilters }) {

    const getAlphaSortOrder = () => {
        return sortOrder === 'a-z' ? 'z-a' : 'a-z'
    }

    return (
        <fieldset className="options-wrapper">
            <legend>Options</legend>
            <label htmlFor="gender">Baby gender:
                <select
                    id="gender"
                    name="gender"
                    value={filters.gender}
                    onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}>
                    <option value="all">All names</option>
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
                    <option value="all">All nationalities</option>
                    <option value="american">American</option>
                    <option value="danish">Danish</option>
                    <option value="finnish">Finnish</option>
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