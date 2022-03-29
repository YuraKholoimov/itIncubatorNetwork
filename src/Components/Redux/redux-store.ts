import { combineReducers, createStore, applyMiddleware } from "redux";
import postReducer from "./Reducers/post-reducer";
import dialogReducer from "./Reducers/dialog-reducer";
import friendsPageReducer from "./Reducers/friendsPage-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import profileReducer from "./Reducers/profile-reducer";
import authReducer from "./Reducers/auth-reducer";

// ---- Types
export type AppStateType = typeof state

const rootReducers = combineReducers({
    postReducer,
    dialogReducer,
    friendsPageReducer,
    profileReducer,
    authReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

const state = store.getState()

