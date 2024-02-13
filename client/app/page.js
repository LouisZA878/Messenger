


import fetchUser from '../fetch/fetchUser'


export default async function Home() {

  const user = await fetchUser().get('/api/auth/user')
  console.log(user)
  console.log('h')
  console.log('h')
  console.log('h')
  console.log('h')
  



  return (
    <div>
        hey
    </div>
  )
}
