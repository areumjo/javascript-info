import React, { useState, useEffect } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    // ability to perform side effects after flushing changes to the DOM
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [])

    return (
        <div>
            <h2>Simple Counter!</h2>
            <p>Press this button</p>
            <button onClick={() => setCount(count + 1)}>Click!</button>
            <p>Counting: {count}</p>
        </div>
    )
};

export default Counter;

class Counter2 extends React.Component {
    constructor() {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <h2>Counter with Class Component</h2>
                <p>Press this button</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click!</button>
                <p>Counting: {this.state.count}</p>
            </div>
        )
    }
}

export default Counter2;