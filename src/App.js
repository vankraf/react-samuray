import React from 'react'
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbar = {props.appState.navbar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs state={props.appState.dialogsPage}/>}/>
                        <Route path='/profile' element={<Profile   profilePage = {props.appState.profilePage}
                                                                 addPost = {props.addPost}
                                                                 updateNewPostText = {props.updateNewPostText}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
