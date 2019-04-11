import React, { Component } from 'react';
import Notifications from './Notifications';
import EventList from '../event/EventList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <EventList events={this.props.events} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.event.events
    }
}

export default connect(mapStateToProps)(Dashboard);