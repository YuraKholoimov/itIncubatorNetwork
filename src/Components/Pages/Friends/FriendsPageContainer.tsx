import FriendsPage from "./FriendsPage";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    InitialStateFriendReducerType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC
} from "../../Redux/friendsPage-reducer";
//-------------------------- TYPES ---------------------------
type mapStateToPropsType = {
    state: InitialStateFriendReducerType
}
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
export type FriendsPagePropsType = mapDispatchToPropsType
    & mapStateToPropsType

//-------------------------- STATE, DISPATCH ---------------------------
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    state: state.friendsPageReducer
})


const mapDispatchToProps = (dispatch: Dispatch) => ({
    follow: (isFollow: boolean, userId: number) => dispatch(followAC(isFollow, userId)),
    setUsers: (users: any) => dispatch(setUsersAC(users)),
    setCurrentPage: (numPage:number) => dispatch(setCurrentPageAC(numPage)),
    setTotalUsersCount: (usersCount:number) => dispatch(setTotalUsersCountAC(usersCount))
})

export const FriendsPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FriendsPage)