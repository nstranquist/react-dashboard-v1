import React from 'react';
import EventSummary from './EventSummary';

const EventList = ({events}) => {  //grabbing projects[] from props using js6 destructuring
    return (
        <div className="event-list section">
            { events && events.map(event => {  //includes "projects &&" portion because if no projects exist, don't bother mapping them
                //we get 1 project each time through the array
                return (
                    <EventSummary event={event} key={event.id} />
                )
            })}
        </div>
    )
}

export default EventList;