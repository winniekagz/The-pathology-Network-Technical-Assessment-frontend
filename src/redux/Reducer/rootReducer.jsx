import { combineReducers } from "redux"
import LoginReducer from "./Auth/Login.Reducers";
import RegisterReducer from "./Auth/Register.Reducers";
import ForgotPasswordReducer from "./Auth/Forgot.Reducer";
import ResetPasswordReducer from "./Auth/ResetPassword.Reducer";
import CreateProjectReducer from "./Projects/CreateProject.Reducer";
import UpdateProjectReducer from "./Projects/UpdateProject.Reducer";
import GetProjectReducer from "./Projects/GetProject.Reducer";
import CreateUserReducer from "./Users/CreateUser";
import UpdateUserReducer from "./Users/UpdateUser";
import GetUserReducer from "./Users/GetUser";
import GetNotificationReducer from "./Notification/GetNotification";

const appReducer = combineReducers({
    login: LoginReducer,
    register:RegisterReducer,
    forgotPassword:ForgotPasswordReducer,
    resetPassword:ResetPasswordReducer,
    createProject:CreateProjectReducer,
    updateProject:UpdateProjectReducer,
    projects:GetProjectReducer,
    updateUser:UpdateUserReducer,
    createUser:CreateUserReducer,
    getUser:GetUserReducer,
    notification: GetNotificationReducer,
})

const rootReducer = (state, action) => {
    // if (action.type === LOGOUT_REQUEST) {
    //     return appReducer(undefined, action);
    //   }

    return appReducer(state, action);
}
export default rootReducer;