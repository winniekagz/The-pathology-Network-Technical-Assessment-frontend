import { requests } from '../../../Services/Api';
import { FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS } from './Auth.Type'
import Swal from "sweetalert2";


const ForgotPasswordAction = (data,navigate) => async (dispatch) => {

    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST })
        const response = await requests.post(`user/forgot-password`, data)


        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: response.data
        })
    
        Swal.fire({
            title: 'Good job!',
            text: 'email sent successfully ',
            icon: 'success',
            confirmButtonColor: '#00a15d',
        })

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAILURE,
            payload: error
        })
        Swal.fire(
            'Error!',
            `${error}`,
            'error'
        )
    }
}
export default ForgotPasswordAction