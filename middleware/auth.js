
export default function({store, redirect}) {
 const isAuth = store.state.authentication.token != null
  if(!isAuth) {
    redirect('/login')
  }
}