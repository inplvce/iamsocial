import React from 'react';
import './App.css';
import {Settings} from "./components/profileContentComponents/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/profileContentComponents/Music/Music";
import {News} from "./components/profileContentComponents/News/News";
import {Dialogs} from "./components/profileContentComponents/Dialogs/Dialogs";
import {ProfileContent} from "./components/profileContentComponents/Profile/ProfileContent";
import {NavBar} from "./components/Navbar/NavBar";
import {Header} from "./components/Header/Header";




function App (props: any) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={'PROFILE'} element={<ProfileContent/>}/>
                        <Route path={'DIALOGS/:DIALOG?'} element={<Dialogs/>}/>



                        {/*<Route path={'NEWS'} element={<News/>}/>*/}
                        {/*<Route path={'MUSIC'} element={<Music/>}/>*/}
                        {/*<Route path={'SETTINGS'} element={<Settings/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );

}


export default App;
