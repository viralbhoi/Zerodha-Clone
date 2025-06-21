import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1>404 Not Found</h1>
                <p className="mb-5">
                    Sorry, the page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
}
