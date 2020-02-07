import React from 'react';
import './style.scss';


export class Cell extends React.Component{
    render() {
        const values = {
            0: '',
            1: '×',
            2: '○'
        };
        return (
            <div onClick={this.props.turnFunction} className="cell">
                <div className="inside">
                    {values[this.props.value]}
                </div>
            </div>
        )
    }
}
