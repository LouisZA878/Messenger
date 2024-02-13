'use client'

import React from 'react'


const page = () => {
    const loggin = () => {
        window.open("https://mymessage.com/api/auth/google", "_self");
      };


  return (
    <div onClick={loggin}>
    login
</div>
  )
}

export default page