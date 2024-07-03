import {v1} from "uuid";

let state = {
    profilePage: {
        posts: [
            {id: v1(), name: 'Oldos', messagePost: 'Hi! Like my post!', count: 1},
            {id: v1(), name: 'Ariel', messagePost: 'Like my post!', count: 15},
            {id: v1(), name: 'Inga', messagePost: 'Hi! Like my!', count: 22},
            {id: v1(), name: 'Mara', messagePost: 'Like!', count: 2},
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
export default state;