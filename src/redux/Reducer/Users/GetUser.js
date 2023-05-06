import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../../Actions/Users/User.Type";




const initialState = {
    loading: false,
    error: "",
    data: {}


}
const GetUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
            break;
        case GET_USERS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
            break;
        case GET_USERS_FAILURE:
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
export default GetUserReducer;