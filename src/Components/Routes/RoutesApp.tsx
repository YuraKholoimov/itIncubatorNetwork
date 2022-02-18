import {Route, Routes} from "react-router-dom";
import {PostsPage} from "../Pages/Posts/PostsPage";
import {DialogsPage} from "../Pages/DialogsPage/DialogsPage";
import {FriendsPage} from "../Pages/Friends/FriendsPage";
import React from "react";
import {ActionsTypes, AppStateType} from "../Redux/State";
import {MessagesPage} from "../Pages/DialogsPage/Messages/MessagesPage";

type RoutesAppType = {
    state: AppStateType,
    dispatch: (value: ActionsTypes) => void
}

export const RoutesApp: React.FC<RoutesAppType> = (props) => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<PostsPage state={props.state} dispatch={props.dispatch}/>}/>
                <Route path={"/dialogs"} element={<DialogsPage state={props.state} dispatch={props.dispatch}/>}/>
                <Route path={"/friends"} element={<FriendsPage/>}/>
                <Route path={"/posts"} element={<PostsPage state={props.state} dispatch={props.dispatch}/>}/>
                {props.state.dialogsPage.messages.map((el, index) => {
                    return <Route path={`/message/${el.id}`}
                                  element={<MessagesPage state={props.state} dispatch={props.dispatch} message={props.state.dialogsPage.messages[index]}  />}/>
                })}

            </Routes>
        </>
    )
}