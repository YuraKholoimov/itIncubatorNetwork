import React, {useEffect} from 'react';
import {ProfileCard} from "./ProfileCard";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfileByIdTC, userProfileType} from "../../Redux/Reducers/profile-reducer";
import {useParams} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import {authDataType, InitialAuthStateType} from "../../Redux/Reducers/auth-reducer";

const ProfileContainer = () => {

    const param = useParams()
    const dispatch = useDispatch()
    let userProfile = useSelector<AppStateType, userProfileType>(state => state.profileReducer.userProfile)
    let authData = useSelector<AppStateType, authDataType>(state => state.authReducer.data)

    useEffect(() => {
        if (param.userId != "19453") dispatch(getUserProfileByIdTC(Number(param.userId)))
        else dispatch(getUserProfileByIdTC(19453))
    }, [param])

    return (
        <>
            <ProfileCard userProfile={userProfile} authData={authData}/>
        </>
    );
};

export default ProfileContainer;