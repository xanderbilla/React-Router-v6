import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {

  /*
  We use useParams hook to extract the dynamic data and access the property on the returned object 
  */

  // const params = useParams()
  // const userId = params.userId

//We can also use to destruct the userId to extract the dynamic information

  const { userId } = useParams()

  return (
    <div>
      This is detail about User {userId}
    </div>
  )
}

export default UserDetail