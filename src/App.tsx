import React from 'react';
import './App.css';
import {Recommendations} from "./Components/Recommendations/Recommendations";
import {Header} from "./Components/Header/Header";
import {SidePanel} from "./Components/SidePanel/SidePanel";
import {Footer} from "./Components/Footer/Footer";
import {Settings} from "./Components/Settings/Settings";

function App() {
    return (
        <div className="App">
            <SidePanel/>
            <Recommendations/>

            <Footer/>
        </div>
    );
}

export default App;
