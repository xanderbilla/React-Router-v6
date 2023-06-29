import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {

  const { userId } = useParams()

  return (
    <div>
      This is detail about User {userId}
    </div>
  )
}

export default UserDetail