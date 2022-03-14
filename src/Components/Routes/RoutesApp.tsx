import {Route, Routes} from "react-router-dom";
import React from "react";
import {PostsPageContainer} from "../Pages/Posts/PostsPageContainer";
import {DialogsPageContainer} from "../Pages/Dialogs/DialogsPageContainer";
import {MessagesContainer} from "../Pages/Dialogs/Messages/MessagesContainer";
import {FriendsPageContainer} from "../Pages/Friends/FriendsPageContainer";


export const RoutesApp = () => {
    return (
        <>
            <Routes>
                <Route path={"*"} element={<><img src={"https://www.seekpng.com/png/detail/212-2123432_404-error-error-404-in-png.png"}/></>}/>
                <Route path={"/"} element={<PostsPageContainer/>}/>
                <Route path={"/posts"} element={<PostsPageContainer/>}/>
                <Route path={"/friends"} element={<FriendsPageContainer/>}/>
                <Route path={"/dialogs"} element={<DialogsPageContainer/>}/>
                <Route path={`/dialogs/message/:id`} element={<MessagesContainer/>}/>
            </Routes>
        </>
    )
}