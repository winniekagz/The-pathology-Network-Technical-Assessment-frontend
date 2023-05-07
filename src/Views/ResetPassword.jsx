import React, { useState } from 'react'
import Validate from '../Hooks/useValidator';
import TextInput from '../Components/FormElements/TextInput';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import ResetPasswordActions from '../redux/Actions/Auth/resetPassword';
import AuthLoadingButton from '../Components/AuthLoadingButtons';
export default function Login() {
    const [formData, setFormData] = useState({  password: "" })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const  {loading,error,data}=useSelector(state=>state.resetPassword)
const {token}=useParams()

    var err = Validate(formData)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })

  

    }
    const onSsubmit = (event) => {
        event.preventDefault();
       
        dispatch(ResetPasswordActions(formData,token,navigate))
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
                                        label="password"
                                        error={true}
                                        errorText={err.password}
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        placeholder="Enter password"
                                        onChange={handleChange} />
                                    <div className="my-[19px]">
                                       

                                    </div>

                                    
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
                                        <span className="text-blue my-[15px] mx-2">Back to login</span>
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
