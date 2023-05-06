import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useToggle from '../Hooks/useToggle';
import Validate from '../Hooks/useValidator';
import TextInput from './FormElements/TextInput';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import CreateProjectsAction from '../redux/Actions/Projects/CreateProject.action';
import { useDispatch, useSelector } from 'react-redux';
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
const CreateProject=({openCreate,handleOpenCreate,handleCloseCreate})=>{
    // const [open, setOpen] = useToggle(false);
    // const [openCreate, setOpenCreate] = React.useState(false);
    // const handleOpenCreate = () => setOpenCreate(true);
    // const handleCloseCreate = () => setOpenCreate(false);
    const [startDate, setStartDate] = useState(new Date());
    const [isUpdating, setIsUpdating] = useState(false);
    const [valueReg, setValueReg] = React.useState('');
    const [endDate, setEndDate] = useState(new Date());
    const [formData, setFormData] = useState({ name: "",  description: "" })
   
  
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.createProject)

    var err = Validate(formData)
 

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })

        console.log("err", err)
        console.log("formData", formData)

    }
    const onSsubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted value`, formData);
        
        dispatch(CreateProjectsAction(formData))
        Validate(formData)
        handleCloseCreate()
    };



    useEffect(() => {
        if (!isUpdating) {
        } else {
            setValueReg(valueReg)
        }
    }, [isUpdating, valueReg]);

    return (
        <div>
        
            <Modal
                open={openCreate}
                onClose={handleCloseCreate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className=' absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  w-full md:w-2/5 bg-white border border-blue shadow p-4'>
                    <div className="flex justify-center items-center">
                        <img src="/images/logo4.png" alt="logo" className='h-36 w-36 mb-2' />



                    </div>
                    <h1 className="text-dark-blue text-sub-header flex justify-center items-center">Create a Project</h1>
                    <div className='flex flex-col justify-center w-full'>
                        <form onSubmit={onSsubmit
                        }>

                            <div className=" ">
                                <div className="my-[19px]">
                                    <TextInput
                                        label="name"
                                        error={true}
                                        errorText={err.name}
                                        name="name"
                                        type="text"
                                        value={formData.name || ""}
                                        placeholder="Enter your name"
                                        onChange={handleChange} />
                                </div>
                                {/* <InputApp type={"text"} title="firstname" required/> */}


                                {/* <div className="my-[19px]">
                                    <h6 className="text-dark-blue text-capitalize"> Start date</h6>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker
                                            SX={{ width: '300px' }}
                                            inputFormat="DD-MM-YYYY"
                                            disableFuture="true"
                                            value={valueReg}
                                            onChange={(e) => {
                                                setStartDate(e.$d);

                                            }}
                                            PopperProps={{
                                                placement: "bottom-end",
                                            }}
                                            renderInput={(params) => <TextField fullWidth  {...params}
                                                size="small"
                                                className="interview"
                                            />
                                            }
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="my-[19px]">
                                    <h6 className="text-dark-blue text-capitalize">End date</h6>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker
                                            SX={{ width: '300px' }}
                                            inputFormat="DD-MM-YYYY"

                                            value={valueReg}
                                            onChange={(e) => {
                                                setEndDate(e.$d)
                                                setIsUpdating(true);
                                            }}
                                            PopperProps={{
                                                placement: "bottom-end",
                                            }}
                                            renderInput={(params) => <TextField fullWidth  {...params}
                                                size="small"
                                                className="border-dark-blue"

                                            />
                                            }
                                        />
                                    </LocalizationProvider>
                                </div> */}
                                <div className='my-[19px]'>
                                    <h6 className="text-dark-blue text-capitalize">Description</h6>
                                    <textarea id="message" rows="4"
                                        name="description"
                                        onChange={handleChange}
                                        value={formData.description || ""}
                                        class="block p-2.5 w-full text-dark-blue bg-gray-50 rounded-sm border border-dark-blue focus:ring-blue "
                                        placeholder="Add a description"></textarea>
                                </div>



                            </div>
                            <div className="flex justify-between ">
                                <div className=""></div>
                                <div className='flex'>
                                    <button
                                        type="submit"
                                        onClick={handleCloseCreate}
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

export default  CreateProject