import Swal from 'sweetalert2';

import { CREATE_PROJECTS_FAILURE, CREATE_PROJECTS_REQUEST, CREATE_PROJECTS_SUCCESS } from './Projects.type';
import { requests } from '../../../Services/Api';
import { LocalStorage } from '../../../Hooks/useLocalStorage';

const CreateProjectsAction = (data, navigate) => async (dispatch) => {


    const token = LocalStorage("token")

    try {
        dispatch({ type: CREATE_PROJECTS_REQUEST })
        const response = await requests.post(`/project/create`, data, {
            headers: {
                'x-access-token': ` ${token}`
            }
        })


        dispatch({
            type: CREATE_PROJECTS_SUCCESS,
            payload: response.data,

        })

        Swal.fire({
            title: 'Good job!',
            text: 'project added Successfully',
            icon: 'success',
            confirmButtonColor: '#00a15d',
        })
       

    } catch (error) {
        console.log("data", error)
        dispatch({
            type: CREATE_PROJECTS_FAILURE,
            payload: error.response.data,
            status: error.response

        })

        Swal.fire({
            title: 'Error!',
            text: `${error.response.data.message}`,
            icon: 'error'
        })


    }

}
export default CreateProjectsAction;