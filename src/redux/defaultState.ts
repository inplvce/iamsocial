import {v1} from "uuid";

export type PostType = {
    id: string,
    messagePost: string,
    count: number
}
export type UserType = {
    id: string,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
}
export type DialogPageType = {
    usersData: UserType[]
    messagesData: MessageType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}


let defaultState: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), messagePost: 'Hi! Like my post!', count: 1},
            {id: v1(), messagePost: 'Like my post!', count: 15},
            {id: v1(), messagePost: 'Hi! Like my!', count: 22},
            {id: v1(), messagePost: 'Like!', count: 2},
        ],
    },

    dialogsPage: {
        usersData: [
            {id: ':DIALOG1', name: 'Vatsok'},
            {id: ':DIALOG2', name: 'Goshan'},
            {id: ':DIALOG3', name: 'Ivan'},
            {id: ':DIALOG4', name: 'Dre Dr'},
        ],
        messagesData: [
            {id: 1, message: 'Ho'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Hoo'},
            {id: 4, message: 'Hm'},
        ],
    }


}



export default defaultState;