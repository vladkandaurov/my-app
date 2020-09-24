import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);


export default store;