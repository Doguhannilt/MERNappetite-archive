import { useAuth0 } from '@auth0/auth0-react'
import axios, { Axios } from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HeaderUsernameMenu = () => {
    const {user, logout} = useAuth0()
    const {email,sub} = user

    useEffect(() => {
      // api/my/user
      axios.post(`http://localhost:7000/api/my/user`, {email,sub})
        .then(res => {
          console.log(`Verified -> ${email}`)
      })
          .catch(err => {
              console.error(err);
          });
  }, [email]);


  return (
    <div>
      <details className="dropdown flex items-center px-3 font-bold ">
        <summary className="m-1 btn font-bold text-2xl font-sans ml-40">{user?.email}</summary>
        <ul className="p-2 ml-40 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><Link to="/user-profile" className='font-bold hover:text-red-400'>User Profile</Link></li>
            <li><button onClick={() => logout()} className='flex flex-1 font-bold bg-red-500'>
                Log out
            </button></li>
        </ul>
        </details>
    </div>
  )
}

export default HeaderUsernameMenu

