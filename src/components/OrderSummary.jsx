import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  const navigate = useNavigate()

  /*
  We can do the same by passing the value -1 to the navigate function which will redirect one route
  */

  return (
    <>
      <div>Order Confirmed!!</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}

export default OrderSummary