import Formidable from 'formidable'

const parseBody = (request, field) => {
    return new Promise((resolve, reject) => {
        let requestForm = new Formidable.IncomingForm();
        requestForm.multiples = true;
        try {
            console.log('working')
            requestForm.parse(request, (err, fields, files) => {
                console.log('working')
                if(err) reject(err);
                const parsedData = JSON.parse(fields[field])
                resolve(parsedData)
                
            })  
        }catch(err) { reject(err) }
    })
}

export {parseBody}