
export default function({store, redirect}, context) {
     if(!context.params.id && !context.params.title) {
       redirect('/')
     }
   }