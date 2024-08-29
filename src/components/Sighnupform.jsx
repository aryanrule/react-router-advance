import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
 
import { useNavigate } from 'react-router-dom';


const Sighnupform = ({setLoggedIn}) => {

  const navigate = useNavigate();

  const [accountType , setAccountType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);

  
  const [formData , setFormData] = useState({
    firstName : "",
    LastName : "",
    email :"",
    password:"",
    confirmPassword:"",
  })

  const submitHandler = (event) => {
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("password do not match");
      return ;
    }

    setLoggedIn(true);
    toast.success("Account Created");

    const accountData = {
      ...formData
    };

    const finalData = {
      ...accountData,
      accountType
    }

    console.log("");
    console.log("printing Final account data ");
    console.log(finalData);

    navigate('/dashboard');

    

  }

  function changeHandler(event){

    const {name , value} = event.target;
    setFormData((prev) => ({...prev, [name]:value}))


  }
   
  return (

    

    <div> 
       {/* lets make student instructor tab */}
       <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

           <button className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
           </button> 

           <button className={`${accountType === "Instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("Instructor")}>
                Instructor
           </button> 
 
       </div>


       <form onSubmit={submitHandler}>
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                         type='text'
                         required
                         name='firstName'
                         value={formData.firstName}
                         placeholder='enter you first name'
                         onChange={changeHandler}
                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                         type='text'
                         required
                         name='LastName'
                         value={formData.LastName}
                         placeholder='enter you LastName name'
                         onChange={changeHandler}
                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                        />
                    </label>
                </div>


                <div className='mt-[20px]'>
                  <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                  </label>
                </div>


                {/* lets create the section for createPassword and confirst Password*/}

                <div  className='w-full flex gap-x-4 mt-[20px]'>
                  <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                      required
                      type={showPassword?("text"):("password")}
                      name='password'
                      value={formData.password}
                      placeholder='enter the password'
                      onChange={changeHandler}
                      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                    />

                   <span
                     className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                  </label>   

                   
                  <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                      required
                      type={showPassword?("text"):("password")}
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      placeholder='confirm password'
                      onChange={changeHandler}
                      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />

                    <span
                     className='absolute right-3 top-[38px] cursor-pointer' 
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>

                  </label>   




                </div>


                 <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                     Create Account
                 </button>

              
           </form>
          
    </div>
  )
}

export default Sighnupform