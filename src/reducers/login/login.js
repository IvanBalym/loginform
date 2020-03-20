import * as constants from '../../constants';

const initialState = {
    page: 1
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_PAGE:
            switch (action.payload) {
                case '/':
                    return {
                    ...state,
                    page: 1
                };
                case '/second-page': 
                    return {
                    ...state,
                    page: 2
                };
                case '/last-page':
                    return {
                    ...state,
                    page: 3
                };
                default:
                    return {
                    ...state,
                    page: 1
                };
            }

        default:
            return state
    }
}