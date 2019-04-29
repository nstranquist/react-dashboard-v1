import React from 'react';

const EventSummary = ({event}) => {  //getting specific event from events[], which is passed down in props
    return(
        <div className="card z-depth-0 event-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{event.name}</span>
                <p>Posted by { event.firstName } { event.lastName }</p>
                <p className="grey-text">{ event.dateCreated.toDate().toString() }</p>
            </div>
        </div>
    )
}

export default EventSummary;