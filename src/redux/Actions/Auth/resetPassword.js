
import { requests } from '../../../Services/Api';
import { RESET_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS } from './Auth.Type'
import Swal from "sweetalert2";



const ResetPasswordActions = (data, resetToken) => async (dispatch) => {

    try {
        dispatch({ type: RESET_PASSWORD_REQUEST })
        const response = await requests.put(`/user/reset-password/${resetToken}`, data)


        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: response
        })
        console.log(response)
        Swal.fire({
            title: 'Good job!',
            text: 'Password successfully reset ',
            icon: 'success',
            confirmButtonColor: '#00a15d',
        })

    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAILURE,
            payload: error.response.data.message
        })
        Swal.fire(
            'Error!',
            `${error.response.data.data.message}`,
            'error'
        )
    }
}
export default ResetPasswordActions