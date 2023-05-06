import React, { useState } from 'react'
import TextInput from '../Components/FormElements/TextInput'
import Avatar from "../Components/EditFile"
import { red } from '@mui/material/colors';
import useToggle from '../Hooks/useToggle';
import UpdateProfileAction from '../redux/Actions/Users/UpdateProfile';
import { useDispatch, useSelector } from 'react-redux';
import { Edit, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material'


export default function Profile() {
    const [file, setFile] = useState(null);
    const user = JSON.parse(localStorage.getItem("user"))

    const [formData, setFormData] = useState({ id: user._id, email: user.email, name: user.name, image: file, password: "", confirmPassword: "" })
    const dispatch = useDispatch()
    const [changePass, setChangePass] = useToggle(false)

    const handleChangeFile = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })

    }
    const onSsubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted value`, formData);
        dispatch(UpdateProfileAction(formData))

    };
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const handleClickShowPasswordConfirm = () => setShowPasswordConfirm(!showPasswordConfirm);
    const handleMouseDownPasswordConfirm = () => setShowPasswordConfirm(!showPasswordConfirm);


    return (
        <div className='bg-light h-screen py-14 w-full '>
            <div className='flex justify-center items-center flex-col'>
                {/* div with shadow and  */}
                <div className="shadow rounded-md h-full w-full md:w-4/5 lg:w-1/2 ">
                    <div className="relative">
                        <div className='h-32 w-full bg-gradient-to-r from-dark-blue to-blue-green  text-center text-white items-center'> Edit Profile</div>
                        <div className="rounded-full absolute -bottom-20 bg-red z-10">
                            <Avatar />

                        </div>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-20 p-2">
                        <TextInput
                            label="name"
                            error={true}
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            placeholder="Enter name"
                            onChange={handleChange} />

                        <TextInput
                            label="email"
                            error={true}
                            type="email"
                            name="email"
                            value={formData.email || ""}
                            placeholder="Enter email"
                            onChange={handleChange} />

                        <div className="col-span-2">

                            <button className={`border-none text-blue capitalize`} style={{ color: changePass ? red[300] : "#007fff" }} onClick={setChangePass}>{changePass ? "Cancel" : "Edit Password"}</button>

                            {changePass && (
                                <div className="">

                                    <div className="my-[19px] relative ">
                                        <TextInput
                                            label="new Password"
                                            error={true}
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password || ""}
                                            placeholder="Enter new Password"
                                            onChange={handleChange} />
                                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                            <IconButton 
                                            sx={{display: 'flex',justifyContent: 'center',alignItems:'center',textAlign: 'center',marginTop:'20px'}}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div className="mx-2 relative">
                                        <TextInput
                                            label="confirm Password"
                                            error={true}
                                            type={showPasswordConfirm ? "text" : "password"}
                                            name="confirmPassword"
                                            value={formData.confirmPassword || ""}
                                            placeholder="Re-enter password"
                                            onChange={handleChange} />
                                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center justify-center">
                                            <IconButton
                                            sx={{display: 'flex',justifyContent: 'center',alignItems:'center',textAlign: 'center',marginTop:'20px'}}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPasswordConfirm}
                                                onMouseDown={handleMouseDownPasswordConfirm}
                                            >
                                                {showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>

                            )}
                            {/* editable image avatar
 */}
                        </div>

                    </div>

                    <div className="flex justify-between">
                        <div></div>
                        <button
                            type="button"
                            onClick={onSsubmit}
                            className="py-2 my-1 px-4 w-1/3 bg-dark-blue text-light hover:bg-blue transition duration-200 ease-in rounded-md">
                            Submit
                        </button>
                    </div>

                </div>


            </div>

        </div>
    )
}
