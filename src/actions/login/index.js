import * as constants from '../../constants';

export const setPage = (payload) => {
    return dispatch => {
        dispatch({
            type: constants.SET_PAGE,
            payload
        })
    }
}