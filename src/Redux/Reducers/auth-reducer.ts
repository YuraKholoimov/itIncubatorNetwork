import {Dispatch} from "redux";
import axios from "axios";
import api from "../../api/api";

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
export type AuthActionsTypes = ReturnType<typeof setAuthDataAC>

//---------------- ACTION CREATORS -------------------//
export const setAuthDataAC = (payload: InitialAuthStateType) => ({type: "SET-AUTH-DATA", payload} as const)

//---------------- THUNK CREATOR -------------------//
export const getAuthDataTC = () => (dispatch: Dispatch) => {
    api().authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthDataAC(response.data))
            }

        })
}

//---------------- PROFILE REDUCER-------------------//
const authReducer = (state: InitialAuthStateType = initialAuthState, action: AuthActionsTypes): InitialAuthStateType => {
    switch (action.type) {
        case  "SET-AUTH-DATA":
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
};

export default authReducer;