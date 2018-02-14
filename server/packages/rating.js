
exports.get_rating = (rating) => {
    return new Promise((resolve, reject) => {
        switch (rating) {
            case 20:
                resolve(1)
                break;
            case 35:
                resolve(2)
                break;
            case 50:
                resolve(3)
                break;
            case 60:
                resolve(4)
                break;
            case 80:
                resolve(5)
                break;
            case 90:
                resolve(6)
                break;
            default:
               resolve(0)
        }
    })
}