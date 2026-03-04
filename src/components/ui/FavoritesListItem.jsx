
export default function FavoritesListItem({ name, nationality, gender }) {
    const flagEmoji = {
        american: '🇺🇸',
        danish: '🇩🇰',
        finnish: '🇫🇮',
    }

    const genderEmoji = {
        boy: '👦',
        girl: '👧',
        neutral: '⚧️'
    }

    return (
        <li className="favorites-list-item">
            <h3>{name}</h3>
            <span>Nationality: {nationality[0].toUpperCase() + nationality.slice(1)} {flagEmoji[nationality]}</span>
            <span>Gender: {gender[0].toUpperCase() + gender.slice(1)} {genderEmoji[gender]}</span>
        </li>
    )
}