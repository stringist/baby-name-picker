import { useState } from 'react'
import Button from '../ui/Button'
import Options from '../ui/Options'


export default function WelcomeScreen({ setScreen }) {
    return (
        <>
            <h1>Welcome to the Name Picker!</h1>
            <p>Choose some options below and get ready to find the perfect name!</p>
            <p>You can use the buttons or the arrow keys to navigate through the names. Use the options at any time to fine-tune your search. Enjoy!</p>

            <Button onClick={() => setScreen('showNames')}>Let's go!</Button>
        </>
    )
}