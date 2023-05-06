import React, { useEffect } from 'react'
import Pagination from '../Components/Pagination'
import InviteUser from '../Components/InviteUser'
import useToggle from '../Hooks/useToggle';
import EditUser from '../Components/EditUser';
import { Edit } from '@mui/icons-material';
import GetUserAction from '../redux/Actions/Users/GeUsers';
import { useDispatch, useSelector } from 'react-redux';
import { Chip } from '@mui/material';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function User() {
    // const [open, setOpen] = useToggle(false);
    const [open, setOpen] = React.useState(false);
    const [usrr,setUsrr] =  React.useState('')
    const handleOpen = () => setOpen(true);
    const handleClose = () =>
        setOpen(false);
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector(state => state.getUser)
   

    const handleOpenAdmin = ()=>{
        toast.warning("You cannot edit Admin")
    }

    useEffect(() => {
        if (!open){
            setTimeout(() => (
                dispatch(GetUserAction())
            ), 1000)
        }   
    }, [open])
    return (
        <div className="p-5  h-screen bg-light">
            <div class="overflow-x-auto shadow-sm rounded-sm">
                <div class="flex items-center justify-between pb-4 flex-col">
                    <div className='w-4/5'>
                        <div className="flex justify-between flex-col sm:flex-row my-1">
                            <div className="">
                                <h1 class='text-dark-blue text-header font-normal'>List of Users</h1>
                            </div>

                        </div>
                        {
                            data.length > 0 ? (
                                <table class="w-full text-sm text-left border border-dark rounded-sm  text-gray-500 shadow-lg  ">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
    
                                        <th scope="col" class="px-6 py-3 text-blue">
                                            name
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-blue">
                                            Email
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-blue">
                                            Role
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-blue">
                                            action
                                        </th>
                                    </tr>
                                </thead>
                                {
                                   data && data.map((r) => (
                                        <tbody>
                                            <tr class="bg-white border-b  hover:bg-white ">
    
                                                <td class="px-6 py-4">
                                                    {r.name}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {r.email}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {r.role == 1 ? (
                                                        <Chip label="User" />
                                                    ) : (
                                                        <Chip label="Admin" />
                                                    )
                                                    }
                                                </td>
                                                <td class="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                                    onClick={() => setUsrr(r)}
                                                >
                                                    {
                                                        r.role == 1 ? (
                                                            <Edit onClick={handleOpen}/>
                                                        ):(
                                                        <Edit onClick={handleOpenAdmin}/>
                                                        )
                                                    }
                                                </td>
                                            </tr>
    
    
                                        </tbody>
                                  
    
                                ))
                            }
                          
                            </table>
                            ):
                            (<h2 style={{ padding: '2rem' }}>No Users available yet</h2>)
                        }
                      
                    </div>

                </div>
            </div>
            {/* <div className="flex justify-between">
                <div className=""></div>
                <Pagination />
            </div> */}
            <EditUser open={open} handleOpen={handleOpen} handleClose={handleClose} usrr={usrr} />
        </div>
    )
}


