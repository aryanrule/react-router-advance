import React, { useState } from 'react'
import {toast} from 'react-hot-toast';
import { Link ,  useNavigate} from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// lets create the login form be ready with all of yoour practical knowledge here 


const Loginform = ({setLoggedIn}) => {
 
  const [formData , setFormData] = useState({
    email:"" , 
    password:"",
  })
  
  const [showPassword , setShowPassword] = useState(false);

  const changeHandler  = (event) => {
    const {name , value} = event.target;
    setFormData((prev) => ({...prev , [name]:value}));
  }

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    toast.success("logged! In");
    setLoggedIn(true);
    console.log(formData);
    
    navigate('/dashboard');
  }

  return (
    
       <form onSubmit={submitHandler} 
          className='flex flex-col w-full gap-y-4 mt-6'>


          <label className='w-full'>

            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>

          <input
             required
             placeholder='enter Email address'
             type='email'
             name ='email'
             value = {formData.email}
             id='email'
             onChange={changeHandler}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

           />

          </label>



          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>

            <input
              required 
              placeholder = 'Enter the password'
              type={showPassword ? ('text'):('password')}
              name='password'
              id='password'
              value={formData.password}
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            {/* <span className='absolute right-3 top-[38px] cursor-pointer'
               onClick={setShowPassword((prev) => !prev)}>
               {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
               
                   
            </span> */}

            <span className='absolute right-3 top-[38px] cursor-pointer' 
            onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}

            </span>


            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>            

          </label>




          <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
          </button>
       </form>
    

  )
}

export default Loginform