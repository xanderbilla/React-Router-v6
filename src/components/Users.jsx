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