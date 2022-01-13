import React, { Component } from "react";

class PersonComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.age
        }
    }

    addAge=() => {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props


        return (
            <div>
                <h1>{firstName}, {lastName}</h1>
                <p>Age: {this.state.counter}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.addAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}


export default PersonComponent