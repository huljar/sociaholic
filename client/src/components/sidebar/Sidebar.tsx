import React from "react";
import "./Sidebar.scss";
import { Instagram } from "./Instagram";
import { Twitter } from "./Twitter";
import { Facebook } from "./Facebook";

export const Sidebar: React.FC = () => {
    return (
        <div className="Sidebar">
            <Twitter checked={true} />
            <Instagram checked={true} />
            <Facebook checked={true} />
        </div>
    );
};
