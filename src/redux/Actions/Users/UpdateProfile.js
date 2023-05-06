import Swal from 'sweetalert2';

import { UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from './User.Type'
import { requests } from '../../../Services/Api';
import { LocalStorage } from '../../../Hooks/useLocalStorage';

const UpdateProfileAction = (data, navigate) => async (dispatch) => {


    const token = LocalStorage("token")

    try {
        dispatch({ type: UPDATE_USER_REQUEST })
        const response = await requests.put(`/user/update`, data, {
            headers: {
                'x-access-token': ` ${token}`
            }
        })
console.log("resoonse",response)

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: response.data,

        })

        Swal.fire({
            title: 'Good job!',
            text: 'Profile Updated Successfully',
            icon: 'success',
            confirmButtonColor: '#00a15d',
        })


    } catch (error) {
        console.log("data", error)
        dispatch({
            type: UPDATE_USER_FAILURE,
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
export default UpdateProfileAction;