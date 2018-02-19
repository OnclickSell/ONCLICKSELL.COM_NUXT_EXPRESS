
const userModel = require('../models/user');
const validator = require('../../validators/input_validator');
const auth = require('../../packages/auth');
const response = require('../../packages/response');
const wrapAsync = require('../../packages/wrapAsync')
const url = require('url');  
const querystring = require('querystring');
const fs = require('fs');
let uploader = require('../../packages/uploader')
uploader = new uploader()

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

exports.get_all_users = (req, res, next) => {

    function callback(err, users) {
        if(err) {
            res.status(409).json({
                messgage: "Something is wrong with your request"
            })
        }else {
            res.status(200).json({
                messgage: 'All the users are listed below',
                users: users
            })
        }
    }
      
    return userModel.get_all_users(callback);
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

exports.get_single_user = (req, res, next) => {

    function callback(err, user) {
        if(err) {
            res.status(409).json({
                messgage: "Something is wrong with your request"
            })
        }else {
            res.status(200).json({
                messgage: 'All the users are listed below',
                users: user
            })
        }
    }
      
    return userModel.get_single_user(req.params.id, callback);
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

exports.get_auth_user = wrapAsync( async (req, res, next) => {

    try {
        const authUser = await userModel.get_auth_user(req)
        response.E200(req, res, authUser)
    }catch(err) {
        throw Error(err)
    }
})

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

exports.delete_single_user = (req, res, next) => {
    function callback(err, user) {
        if(err) {
            res.status(409).json({
                messgage: "Something is wrong with your request"
            })
        }else {
            res.status(200).json({
                messgage: 'User were deleted successfully',
                users: user
            })
        }
    }
      
    return userModel.delete_single_user(req.params.id, callback);
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

exports.update_user_details = wrapAsync( async function(req, res, next) {
    const rawUrl = req.url
    const allowedDetails = ['description', 'age']
    let newData = {}

    try {
        const parsedUrl = url.parse(rawUrl)
        const parsedQs = querystring.parse(parsedUrl.query)
        const paresedKeys = Object.keys(parsedQs)
        
        paresedKeys.forEach(element => {
            if(allowedDetails.indexOf(element) == -1) {
                throw new Error('Invalid user detail field')
            }
        })

       
        paresedKeys.forEach(key => {
            newData[key] = parsedQs[key]
        })
    } catch(err) {
        throw new Error(err)
    }

    

    try {
        const result = await userModel.update_user_details(req, newData)
        response.E200(req, res, result)
    }catch(err) {
        throw new Error(err)
    }
})

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

exports.update_user_avatar = wrapAsync( async function(req, res, next) {
    try {
        const avatar_link = await uploader.upload(req, res)
        const result = await userModel.update_user_avatar(req, avatar_link.secure_url)
        response.E200(req, res, result)
    } catch(err) {
        console.log(err)
        throw new Error(err)
    } 
})


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

exports.update_user_password = (req, res, next) => {
    return userModel.update_user_password(req)
    .then(result => response.E200(req, res, result))
    .catch(err => response.E400(req, res,'', err))
    
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

exports.add_user_profile = (req, res, next) => {
    return userModel.add_user_profile(req)
    .then(result => response.E200(req, res, result))
    .catch(err => response.E400(req, res,'', err))
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

exports.update_profile_picture = (req, res, next) => {
    //fileName needs to be the currently signed user from session
    let user_avatar = '';
    try {
        fs.statSync('profile_pictures/user_avatar.jpg');
        user_avatar = 'user_avatar.jpg'
        cloudinary.v2.uploader.upload('profile_pictures/' + user_avatar, {public_id: "OnclickSell.com/profile_pictures", folder: "OnclickSell.com/profile_pictures/"},(error, result) => {
            if(error) {
                response.E400(req, res,'', error)

            }else {
                user_avatar = result.secure_url
                update_profile_picture()
                fs.unlink('profile_pictures/user_avatar.jpg', function(err) {
                    if(err && err.code == 'ENOENT') {
                        // file doens't exist
                        console.info("File doesn't exist, won't remove it.");
                    } else if (err) {
                        // other errors, e.g. maybe we don't have enough permission
                        console.error("Error occurred while trying to remove file");
                    } else {
                        console.info(`removed`);
                    }
                });
            }
        });
      } catch(e) {
        user_avatar = create_avatar.detect_gender('male')
        update_profile_picture()
      }

    
    const update_profile_picture = () => {
    return userModel.update_profile_picture(req, user_avatar)
        .then(result => {
            res.status(200).json({
                status: "OK",
                code: 200,
                messgage: 'Profile picture updated successfully',
                result: {
                    profile_picture: 'sfa'
                },
            })
        })
        .catch(err => {
            res.status(409).json({
                messgage: "Something is wrong with your request",
                error: err
            })
        })
    }
}





