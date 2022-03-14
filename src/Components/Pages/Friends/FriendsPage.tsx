import React from 'react';
import UserCard from "../../UI/UserCard";
import {FriendsPagePropsType} from './FriendsPageContainer';
import PaginationItem from "../../UI/Pagination";
import {hkdf} from "crypto";


const FriendsPage: React.FC<FriendsPagePropsType> = (props) => {

    return (
        <div style={{width: "70rem"}}>
            {
                props.state.users.map(u => {
                    return <UserCard
                        key={u.id}
                        id={u.id}
                        nickName={u.nickName}
                        city={u.city}
                        avatar={u.avatar}
                        isFollow={u.isFollow}
                        follow={()=>props.follow(!u.isFollow, u.id)}
                    />
                })
            }
            <div className="d-flex justify-content-center m-2">
                <PaginationItem/>
            </div>
        </div>
    );
};

export default FriendsPage;