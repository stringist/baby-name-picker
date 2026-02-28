export default function Button({ onClick, children, ...rest }) {
    return (
        <button onClick={onClick} {...rest}>
            {children}
        </button>
    )
}