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
    timestamp = this.timestamp()
    constructor (request, response, next) {
        this.request = request
        this.response = response
        this.next = next
    }

    timestamp () {
        var date = new Date()
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
    
        month = (month < 10 ? "0" : "") + month;
        day = (day < 10 ? "0" : "") + day;
        hour = (hour < 10 ? "0" : "") + hour;
        min = (min < 10 ? "0" : "") + min;
        sec = (sec < 10 ? "0" : "") + sec;
        const FullDate = date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
        return FullDate
    }
}