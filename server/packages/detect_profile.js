const male = "http://res.cloudinary.com/onclicksell-com/image/upload/v1513504833/OnclickSell.com/Icons/Conceptional-Avatar-Male-Final-Design.png";
const female = "http://res.cloudinary.com/onclicksell-com/image/upload/v1513504833/OnclickSell.com/Icons/Conceptional-Avatar-Female-Final-Design.png";
const db = require('../database/config');

exports.detect_gender = (gender) => {

    if(gender.toUpperCase() === "FEMALE") {
        return female
    } else {
        return male
    }
}