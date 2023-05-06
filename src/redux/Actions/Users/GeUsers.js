
import { LocalStorage } from '../../../Hooks/useLocalStorage';
import { requests } from '../../../Services/Api';
import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from './User.Type';


const GetUserAction = () => async (dispatch) => {

    const token = LocalStorage("token")

    try {
        dispatch({ type: GET_USERS_REQUEST })
        const response = await requests.get(`/user/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data,
          
        })




    } catch (error) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: error
        })


    }

}
export default GetUserAction;