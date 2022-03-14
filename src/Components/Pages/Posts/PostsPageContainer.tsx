import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import { AddPostAC, updateNewPostTextAC } from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {PostType} from "./Post/Post";
import {Dispatch} from "redux";
import { PostsPage } from "./PostsPage";

type mapStateToPropsType = {
    posts: PostType[]
    postTextNew: string
}
type mapDispatchToPropsType = {
    onClick: (postTextNew: string) => void
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onKeypress:(e:React.KeyboardEvent<HTMLTextAreaElement>, postTextNew: string)=> void
}
export type PostPageType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    posts: state.profileReducer.posts,
    postTextNew: state.profileReducer.postTextNew
})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onClick: (postTextNew) => {
            dispatch(AddPostAC(postTextNew))
        },
        onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch( updateNewPostTextAC(e.currentTarget.value))
        },
        onKeypress: (e:React.KeyboardEvent<HTMLTextAreaElement>, postTextNew) => {
            if (e.key == 'Enter') dispatch(AddPostAC(postTextNew))
        }
    }
}

export const PostsPageContainer = connect(mapStateToProps, mapDispatchToProps)(PostsPage)