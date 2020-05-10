import React from "react";
import "./Twitter.scss";
import { Network } from "./Network";
import logo from "./Twitter.svg";

interface TwitterProps {
    checked: boolean;
}

export const Twitter: React.FC<TwitterProps> = ({ checked }) => {
    return (
        <div className="Twitter">
            <Network name="Twitter" thumbnailSrc={logo} checked={checked} />
        </div>
    );
};
