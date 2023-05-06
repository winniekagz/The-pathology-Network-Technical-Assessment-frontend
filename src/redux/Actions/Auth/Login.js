import { LocalStorage } from '../../../Hooks/useLocalStorage';
import { requests } from '../../../Services/Api';

import Swal from "sweetalert2";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './Auth.Type';



const LoginActions = (data, navigate) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_REQUEST })
        const response = await requests.post(`/user/login`, data)
        console.log("response", response)
        if (response.user.role == 1) {
            navigate('/welcome')
        } else if (response.user.role == 2) {
            navigate('/welcome-admin')

        console.log("login", response.user)
        LocalStorage("token", response.token, 'save')
        LocalStorage("user", JSON.stringify(response.user), 'save')
      }
        
        // if (!response.data.activeCompany) {
        //     navigate("/my-companies")
        // } else {
        //     // if (response.data.user.active ==true){
        //     //     navigate("/")  
        //     // }else{
        //     //     navigate("/my-companies")
        //     // }
        //     response.data.initialLogin ? navigate("/general-settings") : navigate("/")

        // }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })
        Swal.fire({
            title: 'Good job!',
            text: 'Login Successfully',
            icon: 'success',
            confirmButtonColor: '#17224d',
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response.data
        })
      console.log(  error.response.data.data.message)
        Swal.fire(
            'Error!',
            `${error.response.data.data.message}`,
            'error'
        )
    }
}
export default LoginActions