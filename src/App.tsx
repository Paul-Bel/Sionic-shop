import React from 'react';
import './App.css';
import {Recommendations} from "./Components/Recommendations/Recommendations";
import {Header} from "./Components/Header/Header";
import {SidePanel} from "./Components/SidePanel/SidePanel";
import {Footer} from "./Components/Footer/Footer";
import {Settings} from "./Components/Settings/Settings";
import { Route, Routes } from 'react-router-dom';
import {Basket} from "./Components/Basket/Basket";
import {OrderHistory} from "./Components/OrderHistory/OrderHistory";
import {OrderStores} from "./Components/OrderHistory/OrderStores";

function App() {
    return (
        <div className="App">
            <Header/>
            <Settings/>
            <SidePanel/>
            <Routes>
                <Route path={"/"} element={<Recommendations/>}/>
                <Route path={"/recommendations"} element={<Recommendations/>}/>
                <Route path={"/basket"} element={<Basket/>}/>
                <Route path={"/history"} element={<OrderStores/>}/>

            </Routes>


            <Footer/>
        </div>
    );
}

export default App;
