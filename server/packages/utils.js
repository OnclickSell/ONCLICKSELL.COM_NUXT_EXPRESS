// import Formidable from 'formidable'

// const parseBody = (request, field) => {
//     return new Promise((resolve, reject) => {
//         let requestForm = new Formidable.IncomingForm();
//         requestForm.multiples = true;
//         try {
//             console.log('working')
//             requestForm.parse(request, (err, fields, files) => {
//                 console.log('working')
//                 if(err) reject(err);
//                 const parsedData = JSON.parse(fields[field])
//                 resolve(parsedData)
                
//             })  
//         }catch(err) { reject(err) }
//     })
// }

// export {parseBody}


export const asyncMiddleware = fn =>
(req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
}


export const throwError = (code, errorType, errorMessage) => error => {
  if(error) {
    // error = new Error(errorMessage || 'Default Error')
    // error = new Error(errorMessage || 'Default Error')  
    error.code = code
    error.errorType = errorType
    // console.log(error)
    throw error
  } 
}

export const throwIf = (fn, code, errorType, errorMessage) => result => {
  if(fn(result)) {
    return throwError(code, errorType, errorMessage)()
  }
}