import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'

  return (
      <div>
          <h3>User 1</h3>
          <h3>User 2</h3>
          <h3>User 3</h3>
      <Outlet />
      <div>

        {/* 
        On click on these buttons we need to remove or search param to deal with search params react router provides a hook called useSearchparams. This is similiar to useState hook behaves similar to the use state hook. Instead of  storing state in memory through it is stored in the URL. 
        
        This hook returns two values of which the first one is an object which we call as searchpatterns the second value returned is a function to set search params
        */}

        <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
        <button onClick={() => setSearchParams()}>Reset Filters</button>
      </div>
      {
        showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing all users</h2>
      }
    </div>
  )
}

export default Users