import { GET_NOTIFICATION_FAILURE, GET_NOTIFICATION_REQUEST, GET_NOTIFICATION_SUCCESS } from "../../Actions/Notification/Notification.type";



const initialState = {
    loading: false,
    error: "",
    data: {}


}
const GetNotificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATION_REQUEST:
            return {
                ...state,
                loading: true,
            }
            break;
        case GET_NOTIFICATION_SUCCESS:
            return {
                ...state,
                data: action.deleting ? action.payload.filter(function (project) {
                    return project.id != action.deleteId
                }) : action.payload,
                loading: false
            }
            break;
        case GET_NOTIFICATION_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
            break;
        default:
            return state;
            break;

    }
}
export default GetNotificationReducer;