import React from "react";
import "./Checkbox.scss";

interface CheckboxProps {
    checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked }) => {
    return <div className="Checkbox">
        <input type="checkbox" checked={checked} />
        <span className="Checkbox-checkmark" />
    </div>;
};
