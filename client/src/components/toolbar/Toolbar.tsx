import React from "react";
import "./Toolbar.scss";

export const Toolbar: React.FC = () => {
    async function testApiCall() {
        const response = await fetch("/api/twitter/test", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        });
        const json = await response.json();
        alert(`Response status: ${response.status} ${response.statusText}\nBody: ${JSON.stringify(json)}`);
    }

    return (
        <div className="Toolbar">
            <button onClick={testApiCall}>Placeholder Button</button>
        </div>
    );
}
