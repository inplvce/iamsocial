import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/profileContentComponents/Dialogs/Dialogs";
import {ProfileContent} from "./components/profileContentComponents/Profile/ProfileContent";
import {NavBar} from "./components/Navbar/NavBar";
import {Header} from "./components/Header/Header";
import {MessageDataType, PostsType, UserDataType} from "./index";


interface AppProps {
    posts: PostsType[];
    usersData: UserDataType[];
    messagesData: MessageDataType[];
}




function App ({ posts, usersData, messagesData }: AppProps) {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={'PROFILE'} element={<ProfileContent posts={posts} />}/>
                        <Route path={'DIALOGS/:DIALOG?'} element={<Dialogs usersData={usersData} messagesData={messagesData} />}/>



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
