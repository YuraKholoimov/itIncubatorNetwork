import React, {useEffect} from 'react';
import UserCard from "../../UI/UserCard";
import {FriendsPagePropsType} from './FriendsPageContainer';
import PaginationItem from "../../UI/Pagination";
import axios from 'axios';

const FriendsPage: React.FC<FriendsPagePropsType> = (props) => {

const getNewPagUsers = (numPage:number) => {
    props.setCurrentPage(numPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${props.state.usersOnPageCount}`)
        .then(response => {
            props.setUsers(response.data.items)
            props.setTotalUsersCount(response.data.usersCount)
        })
}
useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${props.state.usersOnPageCount}`)
        .then(response => {
            props.setUsers(response.data.items)
            props.setTotalUsersCount(response.data.totalCount)
        })
},[])
    const pages = props.state.totalUsersCount / props.state.usersOnPageCount
    console.log(pages)
    const totalPagesCount = []
    for (let i = 1; i < pages + 1; i++) {
        totalPagesCount.push(i)
    }
    console.log(totalPagesCount)

    return (
        <div style={{width: "70rem"}}>

            <div className="d-flex justify-content-center m-2">
                <PaginationItem
                    totalPagesCount={totalPagesCount}
                    currentPage={props.state.currentPage}
                    setCurrentPage={getNewPagUsers}
                />
            </div>
            {
                props.state.users.map(u => {
                    return <UserCard
                        key={u.id}
                        id={u.id}
                        name={u.name}
                        status={u.status}
                        city={u.city}
                        photos={u.photos}
                        avatar={u.photos && u.avatar}
                        followed={u.followed}
                        follow={() => props.follow(!u.followed, u.id)}
                    />
                })
            }

        </div>
    );
};

export default FriendsPage;
