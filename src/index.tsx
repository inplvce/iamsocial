import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostsType = {
    name: string, messagePost: string, count: number
}

export type UserDataType = {
    id: string, name: string
}

export type MessageDataType = {
    id: number, message: string
}

export const posts : Array<PostsType> = [
    {name: 'Oldos', messagePost: 'Hi! Like my post!', count: 1},
    {name: 'Ariel', messagePost: 'Like my post!', count: 15},
    {name: 'Inga', messagePost: 'Hi! Like my!', count: 22},
    {name: 'Mara', messagePost: 'Like!', count: 2},
]

export const usersData : UserDataType[] = [
    {id: ':DIALOG1', name: 'Vatsok'},
    {id: ':DIALOG2', name: 'Goshan'},
    {id: ':DIALOG3', name: 'Ivan'},
    {id: ':DIALOG4', name: 'Dre Dr'},
]


const messagesData: MessageDataType[] = [
    {id: 1, message: 'Ho'},
    // {id: ':MESSAGE1', message: 'HIIIIII'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'Hoo'},
    {id: 4, message: 'Hm'},
]


ReactDOM.render(
    <App posts={posts} usersData={usersData} messagesData={messagesData} />,
  document.getElementById('root')
);