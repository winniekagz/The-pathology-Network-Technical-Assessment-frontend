import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from "../../Actions/Users/User.Type"



const initialState = {
    loading: false,
    error: "",
    data: {}


}
const CreateUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
            break;
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
            break;
        case CREATE_USER_FAILURE:
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
export default CreateUserReducer;