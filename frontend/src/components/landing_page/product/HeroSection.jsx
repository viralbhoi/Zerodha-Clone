import React from "react";

export default function HeroSection() {
    return (
        <div className="border-bottom">
          <div className="text-center mt-5 p-3">
            <h1 className="md:text-5xl text-4xl font-semibold p-5">Technology</h1>

            <h3 className="text-gray-500 text-lg">Sleek, modern and intuitive trading platforms</h3>

            <p className="mt-1 mb-5">
                Check out our{" "}
                <a href="" style={{ textDecoration: "none" }} className="text-blue-600">
                    investment offerings{" "}
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </p>
          </div>
        </div>
    );
}
