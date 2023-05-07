
import { LocalStorage } from '../../../Hooks/useLocalStorage';
import { requests } from '../../../Services/Api';
import { GET_PROJECTS_FAILURE, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS } from './Projects.type';

const GetProjectsAction = () => async (dispatch) => {

    const token = LocalStorage("token")

    try {
        dispatch({ type: GET_PROJECTS_REQUEST })
        const response = await requests.get(`/project/all`, {
            headers: {
                'x-access-token': ` ${token}`
            }
        })

        dispatch({
            type: GET_PROJECTS_SUCCESS,
            payload: response.data,
            
        })




    } catch (error) {
        dispatch({
            type: GET_PROJECTS_FAILURE,
            payload: error.response.data
        })


    }

}
export default GetProjectsAction;