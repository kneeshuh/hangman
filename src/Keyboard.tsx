import React from 'react'
import styles from './Keyboard.module.css'

const keys = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]

type KeyboardProps = {
    disabled?: boolean,
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}

export default function Keyboard({ disabled, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    // <div style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     margin: '25px'
    // }}>
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(25px, 1fr)',
        gap: '.3rem',
        margin: '25px'
    }}>
        {keys.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return <button 
                onClick={() => addGuessedLetter(key)} 
                className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`} 
                key={key}
                disabled={isInactive || isActive || disabled}>
                    {key}
                </button>
        })}
    </div>
    // </div>
  )
}
