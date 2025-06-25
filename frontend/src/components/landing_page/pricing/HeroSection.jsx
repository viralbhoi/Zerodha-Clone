import React from "react";

export default function HeroSection() {
    return (
        <div className="m-5 p-5">
            <div className="flex flex-col border-bottom p-5 text-center my-5">
                <h1 className="font-semibold text-4xl md:text-5xl mb-2">Pricing</h1>
                <h3 className="md:text-2xl text-xl text-gray-500 mt-3">
                    Free equity investments and flat ₹20 traday and F&O trades
                </h3>
            </div>

            <div className="flex flex-col md:flex-row p-4 mt-5  justify-center items-center gap-5 my-5">
                <div className="w-full md:w-4/12 p-4">
                    <img src="media/pricingEquity.svg" alt="" width={"98%"} />
                    <h1 className="text-3xl mb-3 font-medium py-2">Free equity delivery</h1>
                    <p className="text-gray-500">
                        All equity delivery investments (NSE, BSE), are
                        absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="w-full md:w-4/12 p-4">
                    <img src="media/intradayTrades.svg" alt="" width={"98%"} />
                    <h1 className="text-3xl mb-3 font-medium py-2">Intraday and F&O trades</h1>
                    <p className="text-gray-500">
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed
                        order on intraday trades across equity, currency, and
                        commodity trades.
                    </p>
                </div>
                <div className="w-full md:w-4/12  p-4">
                    <img src="media/pricingEquity.svg" alt="" width={"98%"} />
                    <h1 className="text-3xl mb-3 font-medium py-2">Free direct MF</h1>
                    <p className="text-gray-500">
                        All direct mutual fund investments are absolutely free —
                        ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}
