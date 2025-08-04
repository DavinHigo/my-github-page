import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    
    return (
        <div className="home flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to My GitHub Page</h1>
        <p className="text-lg mb-8">This is a simple React application hosted on GitHub Pages.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/TeamBuilder")}>Team Builder</button>
        </div>
    );
    }