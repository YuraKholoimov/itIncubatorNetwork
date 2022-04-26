import React from "react";
import {BodyNavbar} from "../Navbar/BodyNavbar/BodyNavbar";
import {CarouselComponent} from "../UI/CarouselComponent";

import {RoutesApp} from "../Routes/RoutesApp";

import style from "./bodyApp.module.css";
import ProfileContainer from "../Pages/Profile/ProfileContainer";
import {Route, Routes} from "react-router-dom";
import Loader from "../UI/Loader";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {InitialStateFriendReducerType} from "../../Redux/Reducers/friendsPage-reducer";


export const BodyApp = () => {
    const state = useSelector<AppStateType, InitialStateFriendReducerType>(state => state.friendsPageReducer)
    return (
        <div className={style.bodyContent}>
            <CarouselComponent/>
            <BodyNavbar/>
            <ProfileContainer/>
            {state.isFetching && <Loader/>}
            {/*--- ROUTING ---*/}
            <RoutesApp/>
        </div>
    )
}