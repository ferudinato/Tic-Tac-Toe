import React from 'react';
import { render } from 'react-dom';

import '../styles/app.css';

import Board from './Board.jsx';


export default class App extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{/* status */}</div>
                    <div>{/* TODO */}</div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('container-app'))
