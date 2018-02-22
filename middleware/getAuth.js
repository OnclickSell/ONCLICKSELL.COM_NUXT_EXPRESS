export default function(context) {
    //  console.log(context.req, 'from user middleware')
      return context.store.dispatch('authentication/fetchAuthUser')
      // context.store.dispatch('listings/fetchListings', {
      //         limit: 20,
      //         offset: 0,
      //         order: 'id'
      //       })
    
       
    }