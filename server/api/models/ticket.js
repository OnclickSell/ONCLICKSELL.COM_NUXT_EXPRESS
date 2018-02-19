
const db = require('../../database/config');
const bcrypt = require('bcrypt');
const auth = require('../../packages/auth');


/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.add_ticket = (req, ticket_details) => {
    return new Promise((resolve, reject) => {
        db('ticket')
        .insert(ticket_details)
        .then(result => resolve(result))
        .catch(err => reject(err))
    })     
}

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.get_tickets = (req, ticket_details) => {
    return new Promise((resolve, reject) => {
        db('ticket')
        .select('*')
        .where('user_id', 5)
        .leftOuterJoin('ticket_comment', 'ticket.id', 'ticket_comment.ticket_id')
        .then(result => resolve(result))
        .catch(err => reject(err))
    })     
}

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.close_ticket = (req, ticket_id) => {
    return new Promise((resolve, reject) => {
        db('ticket')
        .where('id', ticket_id)
        .update({
            'open': 0
        })
        .then(result => resolve(result))
        .catch(err => reject(err))
    })     
}

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.add_comment = (req, comment) => {
    return new Promise((resolve, reject) => {
        db('ticket_comment')
        .insert(comment)
        .then(result => resolve(result))
        .catch(err => reject(err))
    })     
}



