import React from "react";
import "./Thumbnail.scss";

interface ThumbnailProps {
    source: string;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ source }) => {
    return (
        <div className="Thumbnail">
            <img className="logo" src={source} alt="Twitter Logo" />
        </div>
    );
};
