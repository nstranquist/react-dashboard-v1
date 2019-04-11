import React, { Component } from 'react'

class CreateEvent extends Component {
    state = {
        title: "",
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Event</h5>
                    <div className="input-field">
                        <label htmlFor="event-name">Event Name</label>
                        <input type="text" id="event-name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="event-description">Description</label>
                        <textarea id="event-description" className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink btn-lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateEvent
