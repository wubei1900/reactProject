import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div>hello world!</div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));