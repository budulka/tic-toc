
import React, { useState } from 'react';
import './Field.css'
import Square from '../Square/Square';

const DEFAULTFIELD = [[0,0,0],[0,0,0],[0,0,0]];
const ONETOEIGHT = Array.from({ length: 9 }, (_, index) => index + 1);
const SYMBOLS = Object.freeze({X: 1, O: 2})


const Field = () => {
    const [matrix, setMatrix] = useState(DEFAULTFIELD);
    const [move, setMove] = useState(0);

    const getSeparateCoordinates = (id) => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (id === (i*3 + 1 + j)) 
                    return [i, j];
            }
        }
    }

    const gameLogic = () => {
        setMove(move + 1);
        
    }

    const callback = (id) => {

        let i = getSeparateCoordinates(id)[0];
        let j = getSeparateCoordinates(id)[1];
        console.log(id);
        let temp = matrix;
        console.log(temp);
        move % 2 == 0 ? temp[i][j] = SYMBOLS.X : temp[i][j] = SYMBOLS.O;  
        gameLogic();
        setMatrix(temp);
        console.log(matrix);
    }

    const findState = (id) => {
        let i = getSeparateCoordinates(id)[0];
        let j = getSeparateCoordinates(id)[1];
        return matrix[i][j]
    }

    return <div>
        <div> Move: {(move % 2 == 0 ? 'X' : 'O')} </div>
        <div className="game_field">
        {ONETOEIGHT
            .map(square => (
                <Square 
                    key = {square}
                    id = {square}
                    callback={callback}
                    state = {findState(square)}
                />
            )
        )} 
        </div>
    </div>  
}


export default Field;