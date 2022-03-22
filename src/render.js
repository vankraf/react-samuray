import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";


export let rerenderEntrieTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}
                 addPost={addPost}
                 updateNewPostText = {updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}