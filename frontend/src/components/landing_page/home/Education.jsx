import React from "react";

export default function Education() {
    return (
        <div className="mt-5 mb-5">
            <div className="flex flex-col md:flex-row">
                <div className="flex-col md:flex-1 mb-3 md:mb-0 items-center justify-center">
                    <img src="media/education.svg" alt="Education" style={{width:"70%"}}/>
                </div>
                <div className="flex-col md:flex-1 p-4 md:p-0 mt-5 text-justify">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book
                        in the world covering everything from the basics to
                        advanced trading.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        Versity{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                    <p className="mt-5">
                        TradingQ&A, the most active trading and investment
                        community in India for all your market related queries.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        TradingQ&A{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
