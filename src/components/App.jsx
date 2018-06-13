import React from 'react';
import { render } from 'react-dom';

import '../styles/app.css';

export default class App extends React.Component {
    render() {
        return (
            <h1>My React App!</h1>
        )
    }
}

render(<App />, document.getElementById('container-app'))
