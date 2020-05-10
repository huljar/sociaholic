import React from "react";
import "./Network.scss";
import { Thumbnail } from "./elements/Thumbnail";
import { Name } from "./elements/Name";
import { Checkbox } from "./elements/Checkbox";

interface NetworkProps {
    name: string;
    thumbnailSrc: string;
    checked: boolean;
}

export const Network: React.FC<NetworkProps> = ({ name, thumbnailSrc, checked }) => {
    return (
        <div className="Network">
            <Thumbnail source={thumbnailSrc} />
            <Name value={name} />
            <Checkbox checked={checked} />
        </div>
    );
};
