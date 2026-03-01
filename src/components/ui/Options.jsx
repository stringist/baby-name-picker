import Button from './Button'
import './ui.css'

export default function Options(props) {
    let alphabetized = false



    return (
        <fieldset className="options-wrapper">
            <legend>Options</legend>
            {/* 
      -Sort alphabetically, reverse-alphabetically, or randomized
      -Nationality filter (dropdown, default: all, multi-select)
      -Gender filter (dropdown, default: all, boy names, girl names, gender-neutral, multi-select)
      -Choose first letter
      */}

            <label htmlFor="gender">Baby gender:
                <select id="gender" name="gender" onChange={(e) => console.log(`Selected gender: ${e.target.value}`)}>
                    <option value="all" defaultValue>All names</option>
                    <option value="boy">Boy names</option>
                    <option value="girl">Girl names</option>
                    <option value="neutral">Gender-neutral names</option>
                </select></label>
            <label htmlFor="nationality">
                Nationality:
                <select id="nationality" name="nationality" onChange={(e) => console.log(`Selected nationality: ${e.target.value}`)}>
                    <option value="all" defaultValue>All nationalities</option>
                    <option value="american">American</option>
                    <option value="danish">Danish</option>
                    <option value="finnish">Finnish</option>
                    {/* <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
                <option value="italian">Italian</option>
                <option value="scandinavian">Scandinavian</option> */}
                </select>
            </label>
            <label htmlFor="firstLetter">First letter
                <select id="firstLetter" name="firstLetter" onChange={(e) => console.log(`Selected first letter: ${e.target.value}`)}>
                    <option value="all" defaultValue>All letters</option>
                    {[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map(letter => (
                        <option key={letter} value={letter}>{letter}</option>
                    ))}
                </select></label>
            <Button onClick={() => console.log('Sort Alphabetically')}>{!alphabetized ? 'Sort A-Z' : 'Sort Z-A'}</Button>
            <Button onClick={() => props.applySorting("random")}>Random order</Button>
        </fieldset>)
}