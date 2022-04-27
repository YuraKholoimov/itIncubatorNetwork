import React, {useEffect} from 'react';
import PaginationItem from "../../UI/Pagination";
import {AppStateType} from "../../../Redux/redux-store";
import {
    getNewPagUsersTC,
    InitialStateFriendReducerType,
    setTotalUsersCountAC,
    setUsersAC
} from "../../../Redux/Reducers/friendsPage-reducer";
import {useDispatch, useSelector} from 'react-redux';
import api from '../../../api/api';
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import Friends from "./Friends";


const FriendsPageContainer = () => {
    const state = useSelector<AppStateType, InitialStateFriendReducerType>(state => state.friendsPageReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        api().getUser(state.currentPage, state.usersOnPageCount)
            .then(response => {
                dispatch(setUsersAC(response.data.items))
                dispatch(setTotalUsersCountAC(response.data.totalCount))
            })
    }, [])

    const getNewPagUsers = (numPage: number) => {
        dispatch(getNewPagUsersTC(numPage, state.usersOnPageCount))
    }

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
                <WithAuthRedirect>
                    <Friends state={state}/>
                </WithAuthRedirect>
            }
        </div>
    );
};


export default FriendsPageContainer;
