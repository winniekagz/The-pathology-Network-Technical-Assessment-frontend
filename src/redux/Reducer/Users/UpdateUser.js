import { UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../../Actions/Users/User.Type"



const initialState = {
    loading: false,
    error: "",
    data: {}


}
const UpdateUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
            break;
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
            break;
        case UPDATE_USER_FAILURE:
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
export default UpdateUserReducer;