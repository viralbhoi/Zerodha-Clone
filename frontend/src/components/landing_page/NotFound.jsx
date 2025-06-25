import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="p-5 mb-5">
            <div className="text-center">
                <h1>404 Not Found</h1>
                <p className="mb-5">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="bg-blue-500 px-4 py-3 rounded-lg mt-4 text-xl text-white font-semibold !no-underline hover:bg-blue-700"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}
