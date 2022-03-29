import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";

import {AppStateType} from "../../Redux/redux-store";
import {PostsPage} from "./PostsPage";
import {AddPostAC, InitialStatePostReducerType, updateNewPostTextAC} from "../../Redux/Reducers/post-reducer";


export const PostsPageContainer = () => {

    // ---- HOOKs
    const dispatch = useDispatch()
    const state = useSelector<AppStateType, InitialStatePostReducerType>(state => state.postReducer)

    // ---- Callbacks
    const onClick = () => dispatch(AddPostAC(state.postTextNew))
    const onKeypress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key == 'Enter') dispatch(AddPostAC(state.postTextNew))
    }
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <>
            <PostsPage
                state={state}
                onClick={onClick}
                onKeypress={onKeypress}
                onChange={onChange}
            />
        </>
    )
}