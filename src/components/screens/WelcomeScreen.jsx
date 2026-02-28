import Button from '../ui/Button'

export default function WelcomeScreen() {
    return (
        <div className="welcome-screen">
            <h1>Welcome to the Name Picker!</h1>
            <div className="buttons-wrapper">
                <Button>All Names</Button>
                <Button>Male Names</Button>
                <Button>Female Names</Button>
                <Button>More Options</Button>
            </div>
        </div>
    )
}