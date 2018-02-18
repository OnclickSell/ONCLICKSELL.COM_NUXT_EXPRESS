export default function(context) {
//  console.log(context.req, 'from user middleware')
  context.store.dispatch('authentication/initAuth', context.req)

   
}