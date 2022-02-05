import {BodyNavbar} from "../Navbar/BodyNavbar/BodyNavbar";
import {ProfileCard} from "./Profile/ProfileCard";
import {CarouselComponent} from "../UI/CarouselComponent";
import {PostsPage} from "./Pages/Posts/PostsPage";

import style from "./Style/bodyApp.module.css";
import {MessagesPage} from "./Pages/Messages/MessagesPage";
import {FriendsPage} from "./Pages/Friends/FriendsPage";
import {Route, Routes} from "react-router-dom";

export const BodyApp = () => {
    return (
        <div className={style.bodyContent}>
            <CarouselComponent/>
            <BodyNavbar/>
            <ProfileCard/>
            <Routes>
                <Route path={"/"} element={<PostsPage/>}/>
                <Route path={"/messages"} element={<MessagesPage/>}/>
                <Route path={"/friends"} element={<FriendsPage/>}/>
                <Route path={"/posts"} element={<PostsPage/>}/>
            </Routes>
        </div>
    )
}