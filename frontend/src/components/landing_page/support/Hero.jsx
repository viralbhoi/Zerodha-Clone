import React from "react";

export default function Hero() {
    return (
        <section className="container-fluid" id="support-hero">
            <div className="py-5 mb-4" id="support-wrapper">
                <h3>Support Portal</h3>
                <a href="">Track Tickets</a>
            </div>

            <div className="row p-3 px-5 mx-5 mt-3">
                <div className="col-6 p-3 px-5">
                    <h1 className="fs-3">
                        Search for an answer or browse help topics to create a
                        ticket
                    </h1>

                    <input
                        type="text"
                        placeholder="Eg. how do I activate F&O"
                    />
                    <br />

                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-1 p-3"></div>
                <div className="col-5 p-3">
                    <h1 className="fs-3">Featured</h1>

                    <ol>
                        <li>
                            <a href="">
                                Current Takeovers and Delisting - January 2024
                            </a>
                        </li>
                        <li>
                            <a href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
