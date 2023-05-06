
import Swal from "sweetalert2";
import { LocalStorage } from "../../../Hooks/useLocalStorage";
import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from "./User.Type";
import { requests } from "../../../Services/Api";



const RegisterMemberAction = (data) => async (dispatch) => {
    const token = LocalStorage("token")

    try {
        dispatch({ type: CREATE_USER_REQUEST })
        const response = await requests.put(`/project/add-member`, data, {
            headers: {
                'x-access-token': ` ${token}`
            }
        })


        dispatch({
            type: CREATE_USER_SUCCESS,
            payload: response.data

        })

        Swal.fire({
            title: 'Good job!',
            text: 'You have been registered to a project successfully ',
            icon: 'success',
            confirmButtonColor: '#00a15d',
        })

    } catch (error) {
        dispatch({
            type: CREATE_USER_FAILURE,
            payload: error
        })
        Swal.fire({
            title: 'Error!',
            text: `${error}`,
            icon: 'error'
        })
    }
}
export default RegisterMemberAction
