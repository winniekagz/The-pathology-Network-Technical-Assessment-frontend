import { Box, Button, MenuItem, Modal, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useToggle from '../Hooks/useToggle';
import Validate from '../Hooks/useValidator';
import TextInput from './FormElements/TextInput';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Edit } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import GetUserAction from '../redux/Actions/Notification/Notification';
import RegisterMemberAction from '../redux/Actions/Users/CreateMember';
import AuthLoadingButton from './AuthLoadingButtons';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const InviteUser = ({ openInvite, handleOpenInvite, handleCloseInvite,projectt }) => {
    // const [open, setOpen] =useToggle(false);
   
    const [formData, setFormData] = useState({ user_id: "", project_id: projectt._id })
    const [inputValue, setInputValue] = useState("");
    const [emailErrstate, setEmailErr] = useState(false)
    const dispatch = useDispatch()
    const { loading, data } = useSelector(state => state.getUser)

    var err = Validate(formData)

     
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })


    }
    const onSsubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted value`, formData);
        dispatch(RegisterMemberAction(formData))
        Validate(formData)
    };

    useEffect(() => {
        setFormData(projectt)
        dispatch(GetUserAction())
    }, [projectt])
    return (
        <div>
            {/* <PersonAddAltIcon onClick={setOpen} style={{ color: "#17224d !important" }} /> */}
            <Modal
                open={openInvite}
                onClose={handleCloseInvite}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className=' absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  w-full md:w-1/3 bg-white border border-blue shadow p-4 '>
                    <div className='flex justify-center flex-col'>
                        <div className="flex justify-center">
                            <img src="/images/logo4.png" alt="logo" className='h-36 w-36 mb-0' />



                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-dark-blue text-sub-header">Invite Member</h1>
                        </div>
                        <div className='flex flex-col justify-center w-full'>
                            <form onSubmit={onSsubmit}>

                                <div className=" flex flex-col justify-center">


                                    {/* <InputApp type={"text"} title="firstname" required/> */}
                                    <div className="my-[19px]">
                                        <label for="countries" class="block mb-2  font-medium text-dark-blue  w-full">Select user</label>
                                        {/* <FormControl sx={{ m: 1 }}> */}

                                        <Select
                                            fullWidth
                                            labelId="demo-simple-select-helper-label"
                                            variant='outlined'
                                            id="demo-simple-select-helper"
                                            value={formData.user_id}
                                            name="user_id"
                                            style={{ width: "100% !important" }}
                                            label="Select Role"
                                            onChange={handleChange}
                                        >

                                            {data?.length > 0 && data?.map((item) => (
                                                <MenuItem selected value={item._id}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}



                                        </Select>
                                    </div>

                                </div>
                                <div className="flex justify-between ">
                                    <div className=""></div>
                                    <div className='flex'>
                                        <button
                                            type="submit"
                                            onClick={handleCloseInvite}
                                            className="py-2 my-1 mx-4 px-4  bg-red-900 text-light hover:bg-red-500 transition duration-200 ease-in rounded-md">
                                            Cancel
                                        </button>
                                        <div className="mx-3">
                                            {loading && (<AuthLoadingButton />)}
                                            {!loading && (

                                                <button
                                                    type="submit"
                                                    className="py-2 my-1 px-4  bg-dark-blue text-light hover:bg-blue transition duration-200 ease-in rounded-md">
                                                    Register
                                                </button>
                                            )}


                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default InviteUser
