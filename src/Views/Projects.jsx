import React, { useState } from 'react'
import Pagination from '../Components/Pagination'
import CreateProject from '../Components/CreateProject'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import GetProjectsAction from '../redux/Actions/Projects/GetProjects.action'
import { LocalStorage } from '../Hooks/useLocalStorage'
import { Edit } from '@mui/icons-material'
import EditProject from '../Components/EditProject';
import useToggle from '../Hooks/useToggle';
import InviteUser from '../Components/InviteUser'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


export default function Projects() {
    const dispatch = useDispatch()
    // const [open, setOpen] = useToggle(false);
    const [projectt, setProjectt] = useState('')
    const [invitt, setInvitt] = useState('')

    const [openInvite, setOpenInvite] = React.useState(false);
    const [openCreate, setOpenCreate] = React.useState(false);
    const [openUser, setOpenUser] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () =>
        setOpen(false);
    const { loading, error, data } = useSelector(state => state.projects)
    const user = LocalStorage("user")

   
    const handleOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);

    const handleOpenInvite = () => setOpenInvite(true);
    const handleCloseInvite = () => setOpenInvite(false);

    const handleUser=()=>{
        setOpenUser(!user)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(createUser)
    }

    useEffect(() => {
        if (!open || !openCreate) {
            setTimeout(() => (
                dispatch(GetProjectsAction())
            ), 1000)
        }

    }, [open,openCreate])



    return (
        <div className="p-5  h-screen bg-light">
            <div class="overflow-x-auto shadow-sm rounded-sm">
                <div class=" items-center  pb-4 flex justify-center">
                    <div className='w-4/5'>
                        <div className="flex justify-between flex-col sm:flex-row my-1">
                            <div className="">
                                <h1 class='text-dark-blue text-header font-normal'>List of Projects</h1>

                            </div>
                            {user.role == 2 && <div className="">
                                <div>
                                    <button onClick={handleOpenCreate}
                                        className='bg-dark-blue hover:bg-blue-green text-white px-3 py-2 rounded'>Create Project</button>
                                </div>
                            </div>}
                        </div>
                        {
                            data.length > 0 ? (
                                <>
                                    <table class="w-full text-sm text-left border border-dark rounded-sm  text-gray-500 shadow-lg  ">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-blue">
                                                    Name
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-blue">
                                                    Description
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-blue">
                                                    action
                                                </th>
                                            </tr>
                                        </thead>
                                        {
                                            data && data?.map((proj) => (
                                                <tbody>
                                                    <tr class="bg-white border-b  hover:bg-white ">
                                                        <td class="px-6 py-4">
                                                            {proj.name}
                                                        </td>

                                                        <td class="px-6 py-4">
                                                            {proj.description}
                                                        </td>

                                                        <td class="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                                            onClick={() => setProjectt(proj)}
                                                        >
                                                            <div className="flex">
                                                            <Edit onClick={handleOpen} />
                                                            <div>
                                                            <PersonAddAltIcon onClick={handleOpenInvite} style={{ color: "#17224d !important" }}/>
                                                            </div>
                                                            </div>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            ))
                                        }
                                    </table>
                                </>
                            ) : (
                                <h2 style={{ padding: '2rem' }}>No projects available yet</h2>
                            )
                        }

                    </div>
                </div>


            </div>
            <EditProject open={open} handleOpen={handleOpen} handleClose={handleClose} projectt={projectt} />
            <CreateProject openCreate={openCreate} handleOpenCreate={handleOpenCreate} handleCloseCreate={handleCloseCreate} />
            <InviteUser openInvite={openInvite} handleOpenInvite={handleOpenInvite} handleCloseInvite={handleCloseInvite} projectt={projectt}/>
        </div>
    )
}


