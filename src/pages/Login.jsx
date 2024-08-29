import React from 'react'
import Template from '../components/Template';
import frame from '../assets/frame.png';
import loginImage  from '../assets/login.png';


const Login = (props) => {
  
  let setLoggedIn = props.setLoggedIn;

  return (
    <Template
      title = "Welcome Back"
      desc1 = "Build skills for today, tomorrow, and beyond."
      desc2 = "Education to future-proof your career."
      formtype = "login"
      image = {loginImage}
      setLoggedIn = {setLoggedIn}
    />
  )
}

export default Login