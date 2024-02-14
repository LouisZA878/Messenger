


import fetchUser from '../fetch/fetchUser'


export default async function Home() {

  const user = await fetchUser().get('/api/auth/user')
  console.log(user)
  



  return (
    <div>
        Man what is happening
    </div>
  )
}
