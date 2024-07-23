import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Dialogs } from "./components/profileContentComponents/Dialogs/Dialogs";
import { ProfileContent } from "./components/profileContentComponents/Profile/ProfileContent";
import { NavBar } from "./components/Navbar/NavBar";
import { Header } from "./components/Header/Header";
import { RootStateType } from "./redux/defaultState";

export interface AppProps {
    state: RootStateType;
}

const App: React.FC<AppProps> = ({ state }) => {
    // const removePost = (id: string): void => {
    //     alert(`Post removed: \`${id}\``);
    // };



    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/PROFILE" element={<ProfileContent state={state} />}/>


                    <Route path="/DIALOGS/:DIALOG?" element={<Dialogs messagesData={state.dialogsPage.messagesData} usersData={state.dialogsPage.usersData} />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;