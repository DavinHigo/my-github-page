import React from "react";
import { useNavigate } from "react-router-dom";

export default function TeamBuilder() {
    const navigate = useNavigate();
    
    return (
        <div className="team-builder">
            <h1>Team Builder</h1>
            <p>Use this page to build your team.</p>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
}