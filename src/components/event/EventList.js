import React from 'react';
import EventSummary from './EventSummary';
import { Link } from 'react-router-dom';

const EventList = ({events}) => {  //grabbing projects[] from props using js6 destructuring
    return (
        <div className="event-list section">
            { events && events.map(event => {  //includes "projects &&" portion because if no projects exist, don't bother mapping them
                //we get 1 event each time through the array
                console.log(event);
                return (
                    
                    <Link to={'/event/' + event.id} key={event.id}>
                        <EventSummary event={event} />
                    </Link>
                )
            })}
        </div>
    )
}

export default EventList;