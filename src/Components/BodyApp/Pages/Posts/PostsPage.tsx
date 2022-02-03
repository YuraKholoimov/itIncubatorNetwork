
import {Post} from "./Post/Post";
import {TextareaApp} from "../../../UI/TextareaApp";

export const PostsPage = () => {
    return (
        <div className='col-md-8 d-flex flex-column align-self-end m-3' >

            <Post/>
            <Post/>
            <Post/>
            <TextareaApp/>
        </div>
    )
}