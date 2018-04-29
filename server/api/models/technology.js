const bcrypt = require('bcrypt');
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


/*
|--------------------------------------------------------------------------
| FRONTEND TECHNOLOGIES LIST SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


const FRONTENDPLATEFORMS_LIST_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const frontendPlateformsList = mongoose.model('frontendPlateformsList', FRONTENDPLATEFORMS_LIST_SCHEMA)




const FRONTENDFRAMEWORKS_LIST_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const frontendFrameworksList = mongoose.model('frontendFrameworksList', FRONTENDFRAMEWORKS_LIST_SCHEMA)


const FRONTENDLIBRARIES_LIST_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const frontendLibrariesList = mongoose.model('frontendLibrariesList', FRONTENDLIBRARIES_LIST_SCHEMA)


/*
|--------------------------------------------------------------------------
| FRONTEND TECHNOLOGIES LIST SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


const BACKENDPLATEFORMS_LIST_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const backendPlateformsList = mongoose.model('backendPlateformsList', BACKENDPLATEFORMS_LIST_SCHEMA)




const BACKENDFRAMEWORKS_LIST_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const backendFrameworksList = mongoose.model('backendFrameworksList', BACKENDFRAMEWORKS_LIST_SCHEMA)

const BACKENDLIBRARIES_LIST_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const backendLibrariesList = mongoose.model('backendLibrariesList', BACKENDLIBRARIES_LIST_SCHEMA)


/*
|--------------------------------------------------------------------------
| FRONTEND TECHNOLOGIES SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


const FRONTENDPLATEFORMS_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const frontendPlateforms = mongoose.model('frontendPlateforms', FRONTENDPLATEFORMS_SCHEMA)




const FRONTENDFRAMEWORKS_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const frontendFrameworks = mongoose.model('frontendFrameworks', FRONTENDFRAMEWORKS_SCHEMA)



const FRONTENDLIBRARIES_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const frontendLibraries = mongoose.model('frontendLibraries', FRONTENDLIBRARIES_SCHEMA)



/*
|--------------------------------------------------------------------------
| BACKEND TECHNOLOGIES SECTION
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


const BACKENDPLATEFORMS_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const backendPlateforms = mongoose.model('backendPlateforms', BACKENDPLATEFORMS_SCHEMA)




const BACKENDFRAMEWORKS_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const backendFrameworks = mongoose.model('backendFrameworks', BACKENDFRAMEWORKS_SCHEMA)

const BACKENDLIBRARIES_SCHEMA = new Schema({
    name: String,
    version: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export const backendLibraries = mongoose.model('backendLibraries', BACKENDLIBRARIES_SCHEMA)



