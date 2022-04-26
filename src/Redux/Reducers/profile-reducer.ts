import {Dispatch} from "redux";
import axios from "axios";
import api from "../../api/api";

export type InitialUserProfileStateType = typeof initialState
export type userProfileType = typeof initialState.userProfile

const initialState = {
    userProfile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
        },
        fullName: "",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        photos: {
            small: "",
            large: ""
        },
        userId: 0
    }
}

//---------------- ACTION TYPES -------------------//
export type ProfileActionsTypes = ReturnType<typeof getUserProfileAC>

//---------------- ACTION CREATORS -------------------//
export const getUserProfileAC = (userProfile: userProfileType) => ({type: "GET-USER-PROFILE", userProfile} as const)


//---------------- THUNK CREATOR -------------------//
export const getUserProfileByIdTC = (userId: number) => (dispatch: Dispatch) => {
    api().getUserById(userId)
        .then(response => {
            dispatch(getUserProfileAC(response.data))
        })
}


//---------------- PROFILE REDUCER-------------------//
const profileReducer = (
    state: InitialUserProfileStateType = initialState,
    action: ProfileActionsTypes): InitialUserProfileStateType => {
    switch (action.type) {
        case  "GET-USER-PROFILE":
            return {...state, userProfile: action.userProfile}
        default:
            return state
    }
};

export default profileReducer;