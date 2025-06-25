import React from "react";

export default function Award() {
    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="flex-col md:flex-1/2 p-5">
                    <img src="media/largestBroker.svg" alt="Largest Broker" />
                </div>
                <div className="flex-col md:flex-1/2 p-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">
                        2+ million Zerodha clients contribute to over 15% of all
                        retail order volumes in India daily by trading and
                        investing in:
                    </p>
                    <div className="flex justify-center">
                        <div className="flex-col">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-col">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/pressLogos.png" alt="Press Logos" style={{width:"90%"}}/>
                </div>
            </div>
        </>
    );
}
