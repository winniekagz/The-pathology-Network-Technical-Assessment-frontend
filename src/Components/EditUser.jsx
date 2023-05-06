import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useToggle from '../Hooks/useToggle';
import Validate from '../Hooks/useValidator';
import TextInput from './FormElements/TextInput';
import { Edit, KeyboardArrowDown, Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { selectClasses } from "@mui/joy/Select";
import { Option, Select } from '@mui/joy';
import { PositionData } from './PositionData';

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
const EditUser = ({ open, handleOpen,handleClose,usrr }) => {
    // const [open, setOpen] = useToggle(false);
    const dispatch =  useDispatch()
    const [formData, setFormData] = useState({ startDate: "", name: "",role:"", endDate: "", image: "", description: "" })
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false)
    const [emailErrstate, setEmailErr] = useState(false)

    var err = Validate(formData)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }
    const onSsubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted value`, formData);
        Validate(formData)
        // dispatch(UpdateProjectAction(formData))
        handleClose();
    };
 

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    useEffect(() => {
        setFormData(usrr)
    }, [usrr])

    return (
        <div>
            {/* <button 
            onClick={setOpen}
             className='bg-dark-blue hover:bg-blue-green text-white px-3 py-2 rounded'>
                Create Project
                </button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className=' absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  w-full md:w-2/5 bg-white border border-blue shadow p-4'>
                    <div className="flex justify-center items-center">
                        <img src="/images/logo4.png" alt="logo" className='h-36 w-36 mb-2' />



                    </div>
                    <h1 className="text-dark-blue text-sub-header flex justify-center items-center">Editing : {formData.name} </h1>
                    <div className='flex flex-col justify-center w-full'>
                        <form onSubmit={onSsubmit}>

                            <div className="mb-10 mt-2">
                                <Select
                                        className="fmw-select"
                                        onChange={(e, newval) => {
                                            handleChange({
                                                target: {
                                                    value: newval,
                                                    name: "role"
                                                }
                                            })
                                        }}
                                        placeholder="Select Role *"
                                        indicator={<KeyboardArrowDown />}
                                        size='lg'
                                        name="role"
                                        value={formData?.role? formData?.role:'' }
                                        sx={{
                                            width: '100%',
                                            [`& .${selectClasses.indicator}`]: {
                                                transition: '0.2s',
                                                [`&.${selectClasses.expanded}`]: {
                                                    transform: 'rotate(-180deg)',
                                                },
                                            },
                                        }}
                                    >
                                        {PositionData?.map((option) => (
                                            <Option key={option.value} value={option.value}>
                                                {option.label}
                                            </Option>
                                        ))}
                                    </Select>
                                {/* <InputApp type={"text"} title="firstname" required/> */}
                                {/* <div className="my-[19px]">
                                    <TextInput
                                        label="email"
                                        error={true}
                                        errorText={err.email}
                                        type="email"
                                        name="email"
                                        value={formData.email || ""}
                                        placeholder="Enter email"
                                        onChange={handleChange} />
                                </div> */}
                                {/* <div className="my-[19px] relative">
                                    <TextInput
                                        label="password"
                                        error={true}
                                        errorText={err.password}
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        placeholder="Enter password"
                                        onChange={handleChange}
                                    />
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </div>

                                </div> */}


                            </div>
                            <div className="flex justify-between ">
                                <div className=""></div>
                                <div className='flex'>
                                    <button
                                        type="submit"
                                        onClick={handleClose}
                                        className="py-2 my-1 mx-4 px-4  bg-red-900 text-light hover:bg-red-500 transition duration-200 ease-in rounded-md">
                                        Cancel
                                    </button>
                                    <div className="mx-3">
                                        {loading && (<AuthLoadingButton />)}
                                        {!loading && (

                                            <button
                                                type="submit"
                                                className="py-2 my-1 px-4  bg-dark-blue text-light hover:bg-blue transition duration-200 ease-in rounded-md">
                                                submit
                                            </button>
                                        )}


                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default EditUser
