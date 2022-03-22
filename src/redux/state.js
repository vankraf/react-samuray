import {rerenderEntrieTree} from "../render";



let state = {
    dialogsPage : {
        dialogs : [
            {id: "1", name: "Bob"},
            {id: "2", name: "Kate"},
            {id: "3", name: "Jack"},
            {id: "4", name: "Jim"},
            {id: "5", name: "Alex"},
            {id: "6", name: "Ivan"},

        ],
        messages : [
            {id: "1", message: "hellow word"},
            {id: "2", message: "sdfg"},
            {id: "3", message: "dfghhj"},
            {id: "4", message: "hdghghkfdfgbdfghdfghdfghfdghdfghdfghdfghdfhdfghdbdfgbvfsghfsfbhsfghsrfghbregdrghdrthertherthdrhrhrethhgkgfgh"},
            {id: "5", message: "etyuet"},
            {id: "6", message: "dfgjdt"},

        ]
    },
    profilePage : {
        posts : [

        ],
        newPostText : 'lolkek'
    },
    navbar: {
        items : [
            "profile",
            "dialogs",
            "news",
            "music",
            "settings",
            "friends"

        ],
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntrieTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntrieTree(state);
}

export default state