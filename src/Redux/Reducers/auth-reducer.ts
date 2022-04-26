import {Dispatch} from "redux";
import axios from "axios";

export type InitialAuthStateType = typeof initialAuthState
export type authDataType = typeof initialAuthState.data

const initialAuthState = {
    data: {
        id: 19453,
        login: 'Urbalass',
        email: 'yurakholoimov@ya.ru'
    },
    fieldsErrors: [],
    messages: [],
    resultCode: 0,
    isAuth: false,
}

//---------------- ACTION TYPES -------------------//
export type AuthActionsTypes = ReturnType<typeof getAuthDataAC>

//---------------- ACTION CREATORS -------------------//
export const getAuthDataAC = (payload: InitialAuthStateType) => ({type: "GET-AUTH-DATA", payload} as const)

//---------------- THUNK CREATOR -------------------//
export const getAuthDataTC = () => (dispatch: Dispatch) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
                dispatch(getAuthDataAC(response.data))
        })
}

//---------------- PROFILE REDUCER-------------------//
const authReducer = (state: InitialAuthStateType = initialAuthState, action: AuthActionsTypes): InitialAuthStateType => {
    switch (action.type) {
        case  "GET-AUTH-DATA":
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
};

export default authReducer;