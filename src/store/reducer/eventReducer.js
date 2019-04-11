const initState = {
    events: [
        {id:1, name: 'Smashbros at Lannex', description:'come battle fellow smash bro players in a $50 winner-takes-all pot. $5 entry'},
        {id:2, name: 'Fortnite at Grizz', description:'own some noobs at the latest fortnite esports joint in St. Louis!'},
        {id:3, name: 'ApexLegends at Fieldhouse', description:'bring your A-Game to this Apex Legends tourney for pros! $1,000 in prize, live-streamed'}
    ]
}

const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            console.log('created event', action.event);
    }

    return state;
}

export default eventReducer;