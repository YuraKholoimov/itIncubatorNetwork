import {BodyNavbar} from "../Navbar/BodyNavbar/BodyNavbar";
import {ProfileCard} from "./Profile/ProfileCard";
import {CarouselComponent} from "../UI/CarouselComponent";
import {PostsPage} from "../Pages/Posts/PostsPage";

import style from "./bodyApp.module.css";
import {DialogsPage} from "../Pages/Messages/DialogsPage";
import {FriendsPage} from "../Pages/Friends/FriendsPage";
import {Route, Routes} from "react-router-dom";

export const BodyApp = () => {
    return (
        <div className={style.bodyContent}>
            <CarouselComponent/>
            <BodyNavbar/>
            <ProfileCard/>
            <Routes>
                <Route path={"/"} element={<PostsPage/>}/>
                <Route path={"/dialogs"} element={<DialogsPage/>}/>
                <Route path={"/friends"} element={<FriendsPage/>}/>
                <Route path={"/posts"} element={<PostsPage/>}/>
            </Routes>
        </div>
    )
}