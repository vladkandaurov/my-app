const SET_USER_DATA = 'SET_USER_DATA';

let initialstate= {
    userId: null,
    email: null,
    login: null,




};

const authReducer = (state = initialstate, action) => {

    switch (action.type){
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data

            };
        default:
            return state;
    }





}

export const setAuthUserData    = (userId,email,login) => {
    return {
        type:SET_USER_DATA, data: {userId,email,login}
    }
}

export default authReducer;