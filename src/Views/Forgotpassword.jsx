import React, { useState } from 'react'
import Validate from '../Hooks/useValidator';
import TextInput from '../Components/FormElements/TextInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import ForgotPasswordAction from '../redux/Actions/Auth/ForgotPassword';
import AuthLoadingButton from '../Components/AuthLoadingButtons';

export default function ForgotPassword() {
    const [formData, setFormData] = useState({ email: "", password: "" })
   const dispatch=useDispatch()
   const navigate=useNavigate()
    const { loading, error, data } = useSelector(state => state.forgotPassword)
  
    var err = Validate(formData)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })

   

    }
    const onSsubmit = (event) => {
        event.preventDefault();
        
        dispatch(ForgotPasswordAction(formData,navigate))
        Validate(formData)
    };
    return (

        <div className=' w-screen h-screen bg-light items-center pt-16 md:p-20'>
            <div className="flex justify-center items-center  w-full ">
                <div className="shadow bg-white w-full md:w-1/2  lg:w-2/5 py-4  grid place-items-center px-4 rounded-sm">
                    <div className="">
                        <img src="/images/logo4.png" alt="logo" className='h-36 w-36 mb-2' />



                    </div>
                    <h1 className="text-dark-blue text-sub-header">Welcome Back 👋🏻</h1>
                    <div className='flex flex-col justify-center w-5/6'>
                        <form onSubmit={onSsubmit}>

                            <div className=" ">
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
                              

                            </div>
                            <div className="w-full">
                                {loading && (<AuthLoadingButton />)}
                                {!loading && (

                                    <button
                                        type="submit"
                                        className="py-2 my-1 px-4 w-full bg-dark-blue text-light hover:bg-blue transition duration-200 ease-in rounded-md">
                                        Submit
                                    </button>
                                )}

                                <h6 className="text-dark-blue my-1">
                                    <Link to="/">
                                        <span className="text-blue my-[15px] mx-2">Back to Login</span>
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
