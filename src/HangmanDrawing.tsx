import React from 'react'

const head = (
    <div style={{
        height: '50px',
        width: '50px',
        borderRadius: '100%',
        border: '7px solid black',
        position: 'absolute',
        top: '35px',
        right: '20px'
    }}/> 
)

const body = (
    <div style={{
        height: '75px',
        width: '7px',
        background: 'black',
        position: 'absolute',
        top: '95px',
        right: '50px'
    }}/>
)

const rightArm = (
    <div style={{
        height: '7px',
        width: '70px',
        background: 'black',
        position: 'absolute',
        top: '135px',
        right: '-20px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }}/>
)

const leftArm = (
    <div style={{
        height: '7px',
        width: '70px',
        background: 'black',
        position: 'absolute',
        top: '135px',
        right: '55px',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }}/>
)

const rightLeg = (
    <div style={{
        height: '7px',
        width: '80px',
        background: 'black',
        position: 'absolute',
        top: '163px',
        right: '-23px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }}/>
)

const leftLeg = (
    <div style={{
        height: '7px',
        width: '80px',
        background: 'black',
        position: 'absolute',
        top: '163px',
        right: '50px',
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }}/>
)

const bodyParts = [head, body, leftArm, rightArm, rightLeg, leftLeg]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{
        position: 'relative'
    }}>
        {bodyParts.slice(0, numberOfGuesses)}
        <div style={{
            height: '40px',
            width: '7px',
            background: 'black',
            position: 'absolute',
            top: 0,
            right: 50
        }}/>
        <div style={{
            height: '7px',
            width: '100px',
            background: 'black',
            marginLeft: '50px'
        }}/>
        <div style={{
            height: '300px',
            width: '7px',
            background: 'black',
            marginLeft: '50px'
        }}/>
        <div style={{
            height: '7px',
            width: '200px',
            background: 'black',
            marginLeft: '5px'
        }}/>
    </div>
  )
}
