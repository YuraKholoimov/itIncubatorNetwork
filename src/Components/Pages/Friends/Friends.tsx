import React from 'react';
import {
    followTC,
    FriendType,
    InitialStateFriendReducerType,
    unFollowTC
} from "../../../Redux/Reducers/friendsPage-reducer";
import UserCard from "../../UI/UserCard";
import {useDispatch} from "react-redux";

export type FriendsPropsType = {
    state: InitialStateFriendReducerType
}

const Friends: React.FC<FriendsPropsType> = (props) => {
    const dispatch = useDispatch()

    return (
        <>
            {
                props.state.users.map((u: FriendType) => {
                    const toFollow = (userId: number) => {
                        if (u.followed) {
                            dispatch(unFollowTC(userId))
                        } else {
                            dispatch(followTC(userId))
                        }
                    }
                    return <UserCard
                        key={u.id}
                        id={u.id}
                        name={u.name}
                        status={u.status}
                        city={u.city}
                        photos={u.photos}
                        avatar={u.photos && u.avatar}
                        followed={u.followed}
                        follow={() => toFollow(u.id)}
                        isDisabled={props.state.disableButton}
                    />
                })
            }
        </>
    );
};

export default Friends;