import Swal from 'sweetalert2';

import { UPDATE_PROJECTS_FAILURE, UPDATE_PROJECTS_REQUEST, UPDATE_PROJECTS_SUCCESS } from './Projects.type';
import { LocalStorage } from '../../../Hooks/useLocalStorage';
import { requests } from '../../../Services/Api';

const UpdateProjectAction = (data, navigate) => async (dispatch) => {


    const token = LocalStorage("token")

    try {
        dispatch({ type: UPDATE_PROJECTS_REQUEST })
        const response = await requests.put(`/project/update`, data, {
            
            headers: {
                'x-access-token': ` ${token}`
            }
        })

console.log("resoonse",response)
        dispatch({
            type: UPDATE_PROJECTS_SUCCESS,
            payload: response.data,

        })

        Swal.fire({
            title: 'Good job!',
            text: 'project updated Successfully',
            icon: 'success',
            confirmButtonColor: '#00a15d',
        })


    } catch (error) {
        console.log("data", error)
        dispatch({
            type: UPDATE_PROJECTS_FAILURE,
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
export default UpdateProjectAction;