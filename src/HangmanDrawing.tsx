import React from 'react'

const head = (
    <div style={{
        height: '50px',
        width: '50px',
        borderRadius: '100%',
        border: '10px solid black',
        position: 'absolute',
        top: '45px',
        right: '-30px'
    }}/> 
)

const body = (
    <div style={{
        height: '100px',
        width: '10px',
        background: 'black',
        position: 'absolute',
        top: '110px',
        right: '0px'
    }}/>
)

const rightArm = (
    <div style={{
        height: '10px',
        width: '100px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '-95px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }}/>
)

const leftArm = (
    <div style={{
        height: '10px',
        width: '100px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '5px',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }}/>
)

const rightLeg = (
    <div style={{
        height: '10px',
        width: '100px',
        background: 'black',
        position: 'absolute',
        top: '200px',
        right: '-90px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }}/>
)

const leftLeg = (
    <div style={{
        height: '10px',
        width: '100px',
        background: 'black',
        position: 'absolute',
        top: '200px',
        right: '0px',
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }}/>
)

const bodyParts = [head, body, rightArm, leftArm, rightLeg, leftLeg]

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
            height: '50px',
            width: '10px',
            background: 'black',
            position: 'absolute',
            top: 0,
            right: 0
        }}/>
        <div style={{
            height: '10px',
            width: '200px',
            background: 'black',
            marginLeft: '120px'
        }}/>
        <div style={{
            height: '400px',
            width: '10px',
            background: 'black',
            marginLeft: '120px'
        }}/>
        <div style={{
            height: '10px',
            width: '250px',
            background: 'black'
        }}/>
    </div>
  )
}
