const express = require('express');
const router = express.Router();
import authMiddleware from '../middlewares/authMiddleware'
import TechnologyController from '../controllers/technologyController'
import adminMiddleware from '../middlewares/adminMiddleware'



router.get('/', async (req, res, next) => {
    const technologyController = new TechnologyController(req, res, next)
    return await technologyController.GetTechnology()
})

/*
|--------------------------------------------------------------------------
| FRONTEND SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

router.post('/frontendPlateforms', async (req, res, next) => {
    try {
        const technologyController = new TechnologyController(req, res, next)
        return await technologyController.AddFrontendPlateforms()
    }catch(err) {
        console.log(err)
    }
})

router.post('/frontendFrameworks', async (req, res, next) => {
    try {
        const technologyController = new TechnologyController(req, res, next)
        return await technologyController.AddFrontendFrameworks()
    }catch(err) {
        console.log(err)
    }
})

router.post('/frontendLibraries', async (req, res, next) => {
    try {
        const technologyController = new TechnologyController(req, res, next)
        return await technologyController.AddFrontendLibraries()
    }catch(err) {
        console.log(err)
    }
})

/*
|--------------------------------------------------------------------------
| BACKEND SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

router.post('/backendPlateforms', async (req, res, next) => {
    try {
        const technologyController = new TechnologyController(req, res, next)
        return await technologyController.AddBackendPlateforms()
    }catch(err) {
        console.log(err)
    }
})

router.post('/backendFrameworks', async (req, res, next) => {
    try {
        const technologyController = new TechnologyController(req, res, next)
        return await technologyController.AddBackendFrameworks()
    }catch(err) {
        console.log(err)
    }
})

router.post('/backendLibraries', async (req, res, next) => {
    try {
        const technologyController = new TechnologyController(req, res, next)
        return await technologyController.AddBackendLibraries()
    }catch(err) {
        console.log(err)
    }
})


module.exports = router;