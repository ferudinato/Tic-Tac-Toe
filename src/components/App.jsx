import React from 'react';
import { render } from 'react-dom';

import '../styles/app.css';

import Board from './Board.jsx';


export default class App extends React.Component {
    render() {
        return (
            <div className='game'>
                <Board />
            </div>
        )
    }
}

render(<App />, document.getElementById('container-app'))
