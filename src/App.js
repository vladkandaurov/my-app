import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redux/state";



const App = (props) => {



    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/messages' render={ () => <Dialogs state={props.appstate.messagesPage}/>}/>
                <Route path='/profile' render={ () => <Profile
                    state={props.appstate.profilePage}
                    dispatch={props.dispatch}

                />}/>

            </div>

        </div>
        </BrowserRouter>
    );
}


export default App;
