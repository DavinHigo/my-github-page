import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    
    return (
        <div className="home">
        <h1>Welcome to My GitHub Page</h1>
        <p>This is a simple React application hosted on GitHub Pages.</p>
        <button onClick={() => navigate("/TeamBuilder")}>Team Builder</button>
        </div>
    );
    }