import React from "react";
import {Post, PostType} from "./Post/Post";
import {TextareaApp} from "../../UI/TextareaApp";
import {PostPageType} from "./PostsPageContainer";


export const PostsPage: React.FC<PostPageType> = (props) => {

    const onClick = () => props.onClick(props.postTextNew)
    const onKeypress = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key == 'Enter' ) props.onClick(props.postTextNew)
    }

    return (
        <>
            <div className='col-md-8 d-flex flex-column align-self-end m-3'>
                {
                    props.posts.map((el: PostType) => {
                        return <Post
                            key={el.id}
                            id={el.id}
                            post={el.post}
                            likesCount={el.likesCount}
                        />
                    })
                }
                <TextareaApp
                    value={props.postTextNew}
                    onChange={(e) => props.onChange(e)}
                    onClick={onClick}
                    onKeypress={onKeypress}
                />
            </div>
        </>
    )
}