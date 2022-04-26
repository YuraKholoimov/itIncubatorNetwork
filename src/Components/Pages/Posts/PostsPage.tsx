import React, {ChangeEvent} from "react";
import {Post, PostType} from "./Post/Post";
import {TextareaApp} from "../../UI/TextareaApp";
import {InitialStatePostReducerType} from "../../../Redux/Reducers/post-reducer";

export type PostsPagePropsType = {
    state: InitialStatePostReducerType
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClick: () => void
    onKeypress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

export const PostsPage: React.FC<PostsPagePropsType> = (props) => {
    return (
        <>
            <div className='col-md-8 d-flex flex-column align-self-end m-3'>
                {
                    props.state.posts.map((el: PostType) => {
                        return <Post
                            key={el.id}
                            id={el.id}
                            post={el.post}
                            likesCount={el.likesCount}
                        />
                    })
                }
                <TextareaApp
                    value={props.state.postTextNew}
                    onChange={props.onChange}
                    onClick={props.onClick}
                    onKeypress={props.onKeypress}
                />
            </div>
        </>
    )
}