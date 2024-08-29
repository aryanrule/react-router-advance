import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  let isloggedIn = props.isloggedIn ;
  let setLoggedIn = props.setLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

       <Link to='/'> 
            <img src={Logo} />
       </Link>
       
       <nav>
           <ul className='text-richblack-100 flex gap-x-6'>

               <li>
                    <Link to='/'>Home</Link>
               </li>

               <li>
                  <Link to='about'>About</Link>
               </li>

               <li>
                  <Link to='contact'>contacts</Link>
               </li>

           </ul>
       </nav>
       
       {/* button  */}
       <div className='flex items-center gap-x-4'>

        {!isloggedIn && 
          
          <Link to='login'>
          <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
               log in
          </button>
          </Link>
 
        }
        {!isloggedIn &&
          <Link to='signup'>
          <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
               sign up 
          </button>
          </Link>
        }
           

       </div>

        
    </div>
  )
}

export default Navbar