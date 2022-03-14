import React from "react";
import {BodyNavbar} from "../Navbar/BodyNavbar/BodyNavbar";
import {ProfileCard} from "./Profile/ProfileCard";
import {CarouselComponent} from "../UI/CarouselComponent";

import {RoutesApp} from "../Routes/RoutesApp";

import style from "./bodyApp.module.css";

// type BodyAppType = {
//     state: any
// }

export const BodyApp = () => {
    return (
        <div className={style.bodyContent}>
            <CarouselComponent/>
            <BodyNavbar/>
            <ProfileCard/>
            <RoutesApp  />
        </div>
    )
}