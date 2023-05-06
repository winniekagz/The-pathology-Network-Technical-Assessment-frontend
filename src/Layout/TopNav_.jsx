import React, { useState } from 'react'
import { BiBell } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { LocalStorage } from '../Hooks/useLocalStorage'



export default function TopNav() {
  const [active,setActive]=useState(false)

    console.log("value",active)
    return (
        <div className='w-screen  bg-white shadow-lg fixed'>
            {/* navbar */}
            <div className="flex justify-between h-24 py-1 px-">
                <img src="/images/logo5.png" alt="logo " className='h-18 w-64 mx-2' />
             
                <div className="flex  items-center mx-2">
                    <Link to="/projects"><p className='mx-10 text-[20px]  text-blue-green over:text-dark-blue'>Projects</ p></Link>
                    {user.role==2 &&<Link to="/users"><p className='mx-10 text-[20px] text-blue-green x] hover:text-dark-blue'>Users</ p></Link>}
                   
                    
                    <Link to="/notification"><BiBell className='mx-10 text-[24px] h-20 hoverotext-blue text-dark-blue' /></Link>
                    
                    <div className='relative'>
                       
                        <button onClick={()=>setActive(!active)}
                            type="button" className="flex text-sm rounded-full  " aria-expanded="false" data-dropdown-toggle="dropdown-user">
                           {/* < ReactAvatar name="winfred Kahendo"/> */}
                            <img className="w-[48px]  h-[48px] rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                        </button>
                    </div>
                    {active && (
                        <div style={{ zIndex:"100000 !important"  }} className=" absolute -bottom-60 right-7 my-4 text-base list-none bg-card-bg divide-y divide-blue rounded shadow  " id="dropdown-user">
                            <div className="px-4 py-3" role="none">
                                <p className="text-sm text-blue " role="none">
                                    Winfred Kagendo
                                </p>
                                <p className="text-sm font-medium text-blue truncate " role="none">
                                    neil.sims@flowbite.com
                                </p>
                            </div>
                            <ul className="py-1" role="none">
                                <li>
                                    <a href="/profile" className="block px-4 py-2 text-sm text-light-blue hover:bg-white ">Profile</a>
                                </li>
                             
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-light-blue hover:bg-white ">Sign Out</a>
                                </li>

                            </ul>
                        </div>
                    )}

                </div>

            </div>
            <hr />
            

        </div>
    )
}
