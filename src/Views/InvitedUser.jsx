import React, { useEffect, useState } from 'react'
import Validate from '../Hooks/useValidator';
import TextInput from '../Components/FormElements/TextInput';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import AuthLoadingButton from '../Components/AuthLoadingButtons';
import RegisterMemberAction from '../redux/Actions/Users/CreateMember';
import GetUserAction from '../redux/Actions/Users/GeUsers';

export default function InvitedUser() {
    const [formData, setFormData] = useState({ email: "", password: "", name: "", passwordConfirmation: "" })
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
        
        dispatch(RegisterMemberAction(formData))
        Validate(formData)
    };

    useEffect(() => {
dispatch(GetUserAction())
    }, [])
    return (

        <div className=' w-screen h-screen bg-light items-center pt-16 md:p-20'>
            <div className="flex justify-center items-center  w-full ">
                <div className="shadow bg-white w-full md:w-1/2  lg:w-2/5 py-4  grid place-items-center px-4 rounded-sm">
                    <div className="">
                        <img src="/images/logo4.png" alt="logo" className='h-36 w-36 mb-2' />



                    </div>
                    <h1 className="text-dark-blue text-sub-header">Welcome ! 👋🏻</h1>
                    <div className='flex flex-col justify-center w-full'>
                        <form onSubmit={onSsubmit}>

                            <div className=" ">
                                <div className="my-[19px]">
                                    <TextInput
                                        label="name"
                                        error={true}
                                        errorText={err.username}
                                        name="name"
                                        type="text"
                                        value={formData.username || ""}
                                        placeholder="Enter your name"
                                        onChange={handleChange} />
                                </div>
                                {/* <InputApp type={"text"} title="firstname" required/> */}
                                <div className="my-[19px]">
                                    <TextInput
                                        label="email"
                                        error={true}
                                        errorText={err.email}
                                        type="email"
                                        name="email"
                                        value={formData.email || ""}
                                        placeholder="Enter email"
                                        onChange={handleChange} />
                                </div>
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={formData.role}
                                        name="role"
                                        label="Select Role"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>With label + helper text</FormHelperText>
                                </FormControl>
                                <div className="my-[19px]">
                                    <TextInput
                                        label="password"
                                        error={true}
                                        errorText={err.password}
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        placeholder="Enter password"
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="flex items-center space-x-6">
                                    <div class="shrink-0">
                                        <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                                    </div>
                                    <p>Add Profile  Photo</p>
                                    <label class="block">
                                        <span class="sr-only">Choose profile photo</span>
                                        <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full">
                                {loading && (<AuthLoadingButton />)}
                                {!loading && (

                                    <button
                                    onAbort={onSsubmit}
                                        type="button"
                                        className="py-2 my-1 px-4 w-full bg-dark-blue text-light hover:bg-blue transition duration-200 ease-in rounded-md">
                                        Sign Up
                                    </button>
                                )}

                                <h6 className="text-dark-blue my-1">Already have an account?
                                    <Link to="/">
                                        <span className="text-blue my-[15px] mx-2">Login</span>
                                    </Link>
                                </h6>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
