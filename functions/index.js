const functions = require('firebase-functions');

// import and initialize admin from firebase
const admin = require('firebase-admin');
/*const settings = {/* your settings...  timestampsInSnapshots: true};
firestore.settings(settings);*/
admin.initializeApp(functions.config.firebase); 

/*exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});*/

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc));
}

exports.eventCreated = functions.firestore
    .document('events/{eventId}')
    .onCreate(doc => {
    
        const event = doc.data();
        const notification = {
            content: 'Added a new event',
            user: `${event.firstName} ${event.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()  /*stores whatever time at call of this function*/
        }

        return createNotification(notification);  /* calls above function using newly created 'notification' */
});

exports.userJoined = functions.auth
    .user()
    .onCreate(user => {

        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {

                const newUser = doc.data();
                const notification = {
                    content: 'Joined the platform',
                    user: `${newUser.firstName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification);    

            });

})