import React from "react";
import "./Instagram.scss";
import { Network } from "./Network";
import logo from "./Instagram.svg";

interface InstagramProps {
    checked: boolean;
}

export const Instagram: React.FC<InstagramProps> = ({ checked }) => {
    return (
        <div className="Instagram">
            <Network name="Instagram" thumbnailSrc={logo} checked={checked} />
        </div>
    );
};
