import { LocalStorage } from '../../../Hooks/useLocalStorage';
import { requests } from '../../../Services/Api';
import { GET_NOTIFICATION_FAILURE, GET_NOTIFICATION_REQUEST, GET_NOTIFICATION_SUCCESS } from './Notification.type';

const GetNotificationAction = (id) => async (dispatch) => {

    const token = LocalStorage("token")

    try {
        dispatch({ type: GET_NOTIFICATION_REQUEST })
        const response = await requests.get(`/notification/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        dispatch({
            type: GET_NOTIFICATION_SUCCESS,
            payload: response.data,

        })




    } catch (error) {
        dispatch({
            type: GET_NOTIFICATION_FAILURE,
            payload: error.response.data
        })


    }

}
export default GetNotificationAction;