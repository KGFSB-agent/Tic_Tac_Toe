import React from 'react';
import styles from './style.scss';
import {Cell} from "./Cell";


export class Field extends React.Component {
    constructor() {
        super();

        this.state = {
            cells: [
                [1, 0, 0],
                [2, 2, 1],
                [0, 0, 2]
            ]
        }
    }

    render() {
        return (
            <>
                <div>Поле нахуй (Хуёполе)</div>
                {this.state.cells.map((row, index) => (
                        <div key={index} className="palka">
                            {row.map((item, index) => (
                                    <Cell key={index} value={item}/>
                                )
                            )}
                        </div>
                    )
                )}
            </>
        )
    }
}
