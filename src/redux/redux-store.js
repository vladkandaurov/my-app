import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import messageReducer from "./messages-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer
});
let store = createStore(reducers);


export default store;