import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form >
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <p>Error</p>
            <button>Login</button>
            <span>Don't you have an account? <Link to='/register'>Regiser</Link>
            </span>
        </form>
    </div>
  )
}

export default Login