
export default function({store, redirect}) {
 const isAuth = Object.keys(store.state.authentication.user).length
  if(isAuth == 0) {
    redirect('/auth/signin')
  }
}