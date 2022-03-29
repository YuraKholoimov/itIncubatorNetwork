import React, {useEffect} from 'react';
import UserCard from "../../UI/UserCard";
import PaginationItem from "../../UI/Pagination";
import axios from 'axios';
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC, followTC,
    getNewPagUsersTC,
    InitialStateFriendReducerType, isFetchingToggleAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowTC
} from "../../Redux/Reducers/friendsPage-reducer";
import {useDispatch, useSelector} from 'react-redux';
import Loader from "../../UI/Loader";

const FriendsPageContainer = () => {
    const state = useSelector<AppStateType, InitialStateFriendReducerType>(state => state.friendsPageReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${state.currentPage}&count=${state.usersOnPageCount}`)
            .then(response => {
                dispatch(setUsersAC(response.data.items))
                dispatch(setTotalUsersCountAC(response.data.totalCount))
            })
    }, [])

    const getNewPagUsers = (numPage: number) => dispatch(getNewPagUsersTC(numPage, state.usersOnPageCount))

    const pages = state.totalUsersCount / state.usersOnPageCount

    const totalPagesCount = []
    for (let i = 1; i < pages + 1; i++) {
        totalPagesCount.push(i)
    }

    return (
        <div style={{width: "70rem"}}>
            <div className="d-flex justify-content-center m-2">
                <PaginationItem
                    totalPagesCount={totalPagesCount}
                    currentPage={state.currentPage}
                    setCurrentPage={getNewPagUsers}
                />
            </div>
            {
                state.users.map((u) => {
                    const toFollow = (userId: number) => {
                        if(u.followed) dispatch(unFollowTC(userId))
                        else dispatch(followTC(userId))
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
                    />
                })
            }
        </div>
    );
};

export default FriendsPageContainer;
