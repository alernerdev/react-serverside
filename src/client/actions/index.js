export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => {
    return async (dispatch, getState, axiosInstance) => {
        console.log('inside fetchUsers action creator');

        // axiosInstance base URL is /api
        const res = await axiosInstance.get('/users');

        dispatch({
            type: FETCH_USERS,
            payload: res
        });
    }
}

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => {
    return async (dispatch, getState, axiosInstance) => {
        console.log('inside fetchCurrentUser action creator');

        // axiosInstance base URL is /api
        const res = await axiosInstance.get('/current_user');

        dispatch({
            type: FETCH_CURRENT_USER,
            payload: res
        });
    }
}
