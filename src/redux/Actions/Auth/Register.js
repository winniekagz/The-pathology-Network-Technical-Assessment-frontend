
import { LocalStorage } from '../../../Hooks/useLocalStorage';
import { requests } from '../../../Services/Api';
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './Auth.Type'
import Swal from "sweetalert2";
const RegisterActions = (data, navigate) => async (dispatch) => {

    try {
        dispatch({ type: REGISTER_REQUEST })
        const response = await requests.post(`user/register`, data)

        // navigate("/verifyemail")
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })
        LocalStorage("token", response.token, 'save')
        LocalStorage("user", JSON.stringify(response.user), 'save')
        Swal.fire({
            title: 'Good job!',
            text: 'registered Successfully',
            icon: 'success',
            confirmButtonColor: '#00a15d',
        })
if (response.user.role==1){
    navigate('/welcome')
}else if (response.user.role==2){
    navigate('/welcome-admin')
}

    } catch (error) {
        dispatch({
            type: REGISTER_FAILURE,
            payload: error.response.data
        })
        console.log
        Swal.fire(
            'Error!',
            `${error}`,
            'error'
        )
    }
}
export default RegisterActions