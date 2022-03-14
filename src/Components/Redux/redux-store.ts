import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendsPageReducer from "./friendsPage-reducer";

const rootReducers = combineReducers({
    profileReducer,
    dialogReducer,
    friendsPageReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers);