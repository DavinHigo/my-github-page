import React from "react";
import { useNavigate } from "react-router-dom";

export default function TeamBuilder() {
    const navigate = useNavigate();
    
    return (
        <div className="team-builder flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Team Builder</h1>
            <p className="text-lg mb-8">Use this page to build your team.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
}