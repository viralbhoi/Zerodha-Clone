import React from "react";

export default function Hero() {
    return (
        <section id="support-hero">
            <div className="p-5 md:p-0 md:ml-[4%] mb-4 flex md:justify-between md:flex-row flex-col">
                <h3 className="font-semibold text-3xl md:text-4xl py-5">Support Portal</h3>
                <a href="#" className="text-lg md:text-xl py-5">Track Tickets</a>
            </div>

            <div className="flex flex-col md:flex-row p-3 px-5 md:mx-5 mx-0  mt-3">
                <div className="m-full md:w-1/2 p-3 md:px-5 px-0">
                    <h1 className="md:text-3xl text-xl">
                        Search for an answer or browse help topics to create a
                        ticket
                    </h1>

                    <input
                    className="bg-gray-100 p-2 rounded-xl text-black"
                        type="text"
                        placeholder="Eg. how do I activate F&O"
                    />
                    <br />

                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="md:w-1/12 w-0 p-3"></div>
                <div className="flex-col md:w-5/12 w-full md:p-3 p-0">
                    <h1 className="md:text-3xl text-xl mb-5">Featured</h1>

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
