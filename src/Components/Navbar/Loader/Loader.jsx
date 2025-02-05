import React from "react";
import "./Loader.css";

const Loader = ({ isLoading }) => {
    return (
        <div className={`loader-container ${isLoading ? '' : 'hidden'}`}>
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;