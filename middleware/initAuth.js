export default function(context) {
//  console.log(context.req, 'from user middleware')
  return context.store.dispatch('authentication/initAuth', context.req)

   
}