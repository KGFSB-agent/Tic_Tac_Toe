import React from 'react';
import './style.scss';
import {Cell} from "./Cell";


export class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            turn: 1
        }
    }

    getHorizontal(x, y) {
        return this.state.cells[y]
    }

    getVertical(x, y) {
        const {cells} = this.state;
        return [cells[0][x], cells[1][x], cells[2][x]]
    }

    getDiagonalLeft(x, y) {
        if (x !== y && (x === 1 || y === 1)) {
            return false
        } else {
            const {cells} = this.state;
            return [cells[0][0], cells[1][1], cells[2][2]]
        }
    }

    getDiagonalRight(x, y) {
        if (x !== y && (x === 1 || y === 1)) {
            return false
        } else {
            const {cells} = this.state;
            return [cells[2][0], cells[1][1], cells[0][2]]
        }
    }

    arrayCheck(arr) {
        if (arr) {
            return arr[0] === arr[1] && arr[1] === arr[2] && arr[2] !== 0
        } else {
            return false
        }
    }

    win(x, y) {
        return this.arrayCheck(this.getVertical(x, y)) ||
            this.arrayCheck(this.getHorizontal(x, y)) ||
            this.arrayCheck(this.getDiagonalLeft(x, y)) ||
            this.arrayCheck(this.getDiagonalRight(x, y))
    }

    nextTurn(x, y) {
        const {cells, turn} = this.state;
        if (!cells[y][x]) {
            cells[y][x] = turn;
            const newState = {
                cells: cells,
                turn: turn === 1 ? 2 : 1
            };
            this.setState(newState);
            if (this.win(x, y)) {
                alert("Иди ты нахуй блять");
                this.setState({
                    cells: [
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]
                    ],
                    turn: 1
                })
            }
        }
    }

    render() {
        return (
            <>
                <div>Поле нахуй (Хуёполе)</div>
                {this.state.cells.map((row, y) => (
                        <div key={y} className="palka">
                            {row.map((item, x) => (
                                    <Cell turnFunction={
                                        () => {
                                            this.nextTurn(x, y)
                                        }
                                    } key={x} value={item}/>
                                )
                            )}
                        </div>
                    )
                )}
            </>
        )
    }
}

