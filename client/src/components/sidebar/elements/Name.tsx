import React from "react";
import "./Name.scss";

interface NameProps {
    value: string;
}

export const Name: React.FC<NameProps> = ({ value }) => {
    return <div className="Name">{value}</div>;
};
