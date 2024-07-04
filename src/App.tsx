import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/profileContentComponents/Dialogs/Dialogs";
import {ProfileContent} from "./components/profileContentComponents/Profile/ProfileContent";
import {NavBar} from "./components/Navbar/NavBar";
import {Header} from "./components/Header/Header";
import state from "./redux/state";


// export type PostsType = {
//     id: string,
//     name: string,
//     messagePost: string,
//     count: number
// }
//
//
// export type UserDataType = {
//     id: string, name: string
// }
//
// export type MessageDataType = {
//     id: number, message: string
// }
//
export interface AppProps {
    // posts: PostsType[];
    // usersData: UserDataType[];
    // messagesData: MessageDataType[];
    state: typeof state;

    // removePost: (id: string) => void;
}


function App({state}: AppProps) {


    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={'PROFILE'}
                               element={<ProfileContent state={state.profilePage}/>}/>



                        <Route path={'DIALOGS/:DIALOG?'}
                               element={<Dialogs state={state.dialogsPage}/>}/>/


                        {/*<Route path={'NEWS'} element={<News/>}/>*/}
                        {/*<Route path={'MUSIC'} element={<Music/>}/>*/}
                        {/*<Route path={'SETTINGS'} element={<Settings/>}/>*/}
                    </Routes>
                </div>
            </div>
    );

}


export default App;
