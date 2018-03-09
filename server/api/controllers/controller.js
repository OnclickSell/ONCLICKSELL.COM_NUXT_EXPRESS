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

export default class Controller {
    constructor (request, response, next) {
        this.request = request
        this.response = response
        this.next = next
    }
}