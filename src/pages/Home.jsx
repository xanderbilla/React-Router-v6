import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  
  /*
  
  we are going to use the navigate function based on button click event
 
  To replace the history instead of pushing a route onto the stack for that we can pass the second optional argument which is an object with property 'replace' and it's value true

  */
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary', {replace: true})}>Place Order</button>
    </>
  )
}

export default Home