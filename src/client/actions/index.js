import axios from 'axios';

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => {
    return async (dispatch) => {
        console.log('inside fetchUsers action creator');

        const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

        dispatch({
            type: FETCH_USERS,
            payload: res
        });
    }
}