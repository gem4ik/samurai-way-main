import React from 'react';
import style from './App.module.css';
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersAPIComponent from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import ProfileAPIContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={style.appWrapper}>
                <div>
                    <HeaderContainer/>
                    <Nav/>
                </div>
                <div className={style.content}>
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileAPIContainer />}>
                    </Route>
                    <Route
                        path="/dialogs" render={() =>
                        <DialogsContainer />}>
                    </Route>
                    <Route
                        path="/users" render={() =>
                        <UsersAPIComponent />}>
                    </Route>
                    <Route path='/login' render={()=><LoginContainer/>}></Route>
                    <Route path="/music" render={() => <Music/>}> </Route>
                    <Route path="/news" render={() => <News/>}> </Route>
                    <Route path="/settings" render={() => <Settings/>}> </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
