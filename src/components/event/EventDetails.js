import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const EventDetails = (props) => {
    const { event } = props;

    /* return jsx if we have an event */
    if(event) {
        return (
            <div className="container section event-details">
                <div className="card z-index-0">
                    <div className="card-content">
                        <span className="card-title">{ event.name }</span>
                        <p>{ event.description }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by { event.hostname}, <span className="darken-3">{ event.hostposition }</span></div>
                        <div>12 April, 3pm</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading event...</p>
            </div>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const events = state.firestore.data.events;
    const event = events ? events[id] : null;
    return {
        event: event
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'events'}
    ])
)(EventDetails);
