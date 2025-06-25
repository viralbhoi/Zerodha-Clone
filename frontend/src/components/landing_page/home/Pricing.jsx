import React from "react";

export default function Pricing() {
    return (
        <div className="mb-3 p-5 my-5">
            <div className="flex flex-col md:flex-row gap-3 justify-between px-5">
                <div className="flex-col w-full md:w-4/12">
                    <h1 className="mb-3 md:text-5xl text-4xl font-semibold">Unbeatable Pricing</h1>
                    <p className="font-md">
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="" className="text-blue-600" style={{ textDecoration: "none" }}>
                        See Pricing{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>
                <div className="flex-col w-0 md:w-2/12"></div>
                <div className="flex-col w-full md:w-6/12">
                    <div className="flex text-center">
                        <div className="flex-col border p-5 w-1/2">
                            <h1 className="mb-3 md:text-5xl text-4xl">₹0</h1>
                            <p>
                                Free equity delivery and
                                <br />
                                direct mutual funds
                            </p>
                        </div>
                        <div className="flex-col border p-4 w-1/2">
                            <h1 className="mb-3 md:text-5xl text-4xl">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
