import {Post} from "./Post/Post";
import {TextareaApp} from "../../UI/TextareaApp";
import {ActionsTypes, AddPostAC, AppStateType, updateNewPostTextAC} from "../../Redux/State";
import React from "react";
import {Container} from "react-bootstrap";

type PostsPageType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

export const PostsPage: React.FC<PostsPageType> = (props) => {
    return (
        <>
                <div className='col-md-8 d-flex flex-column align-self-end m-3'>


                    {props.state.profilePage.posts.map(el => {
                        return <Post
                            key={el.id}
                            id={el.id}
                            post={el.post}
                            likesCount={el.likesCount}
                        />
                    })}

                    <TextareaApp
                        state={props.state}
                        dispatch={props.dispatch}
                        updateAC={updateNewPostTextAC}
                        addItemAC={AddPostAC}
                    />
                </div>
        </>
    )
}