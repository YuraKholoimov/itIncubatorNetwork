import React from "react";
import {Route, Routes} from "react-router-dom";
import {PostsPageContainer} from "../Pages/Posts/PostsPageContainer";
import {MessagesContainer} from "../Pages/Dialogs/Messages/MessagesContainer";
import FriendsPageContainer from "../Pages/Friends/FriendsPageContainer";
import DialogsPageContainer from "../Pages/Dialogs/DialogsPageContainer";
import ProfileContainer from "../Pages/Profile/ProfileContainer";

export const RoutesApp = () => {
    const img = "https://www.seekpng.com/png/detail/212-2123432_404-error-error-404-in-png.png";
    const img1 = "https://www.pngitem.com/pimgs/m/124-1249687_samurai-warrior-poster-hd-png-download.png";
    return (
        <>
            <Routes>
                <Route path={"*"} element={<><img src={img1}/></>}/>
                {/*<Route path={"/"} element={<ProfileContainer/>}/>*/}
                {/*<Route path={"/profile"} element={<ProfileContainer/>}/>*/}
                <Route path={"/profile/:userId"} element={
                    <>
                        <ProfileContainer/>
                        <PostsPageContainer/>
                    </>
                }/>
                <Route path={"/posts"} element={<PostsPageContainer/>}/>
                <Route path={"/friends"} element={<FriendsPageContainer/>}/>
                <Route path={"/dialogs"} element={<DialogsPageContainer/>}/>
                <Route path={`/dialogs/message/:id`} element={<MessagesContainer/>}/>
            </Routes>
        </>
    )
}