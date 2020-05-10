import React from "react";
import "./Facebook.scss";
import { Network } from "./Network";
import logo from "./Facebook.svg";

interface FacebookProps {
    checked: boolean;
}

export const Facebook: React.FC<FacebookProps> = ({ checked }) => {
    return (
        <div className="Facebook">
            <Network name="Facebook" thumbnailSrc={logo} checked={checked} />
        </div>
    );
};
