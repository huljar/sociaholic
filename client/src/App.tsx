import React from "react";
import "./App.scss";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Toolbar } from "./components/toolbar/Toolbar"

function App() {
    return (
        <div className="App">
            <div className="App-toolbar">
                <Toolbar />
            </div>
            <div className="App-main">
                <div className="App-sidebar">
                    <Sidebar />
                </div>
                <div className="App-editArea"></div>
            </div>
        </div>
    );
}

export default App;
