import {BodyNavbar} from "../Navbar/BodyNavbar/BodyNavbar";
import {ProfileCard} from "./Profile/ProfileCard";
import {CarouselComponent} from "../UI/CarouselComponent";
import {PostsPage} from "./Pages/Posts/PostsPage";

import style from "./Style/bodyApp.module.css";
import {Container} from "react-bootstrap";
import {MessagesPage} from "./Pages/Messages/MessagesPage";
import {FriendsPage} from "./Pages/Friends/FriendsPage";

export const BodyApp = () => {
    return (
        <div className={style.bodyContent}>
            <CarouselComponent/>
            <BodyNavbar/>
            <ProfileCard/>

            {/*<PostsPage/>*/}
            {/*<MessagesPage/>*/}
            {/*<FriendsPage/>*/}

        </div>
    )
}