import React from "react";
import {BodyNavbar} from "../Navbar/BodyNavbar/BodyNavbar";
import {ProfileCard} from "./Profile/ProfileCard";
import {CarouselComponent} from "../UI/CarouselComponent";

import {ActionsTypes, AppStateType} from "../Redux/State";

import {RoutesApp} from "../Routes/RoutesApp";

import style from "./bodyApp.module.css";

type BodyAppType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

export const BodyApp: React.FC<BodyAppType> = (props) => {
    return (
        <div className={style.bodyContent}>
            <CarouselComponent/>
            <BodyNavbar/>
            <ProfileCard/>
            <RoutesApp state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}