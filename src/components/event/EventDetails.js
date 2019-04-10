import React from 'react'

const EventDetails = () => {
  return (
     <div className="container section event-details">
        <div className="card z-index-0">
            <div className="card-content">
                <span className="card-title">Event Title</span>
                <p>A bunch of randomg text about our eSports event that will be displayed on the web page. and etc etc etc.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Admin Nico</div>
                <div>12 April, 3pm</div>
            </div>
        </div>
     </div>
  );
}

export default EventDetails
