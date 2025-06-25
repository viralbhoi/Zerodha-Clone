import React from "react";

export default function HeroSection() {
    return (
        <>
            <div className="flex flex-col border-bottom p-5 mt-5 text-center">
                <h1>Pricing</h1>
                <h3 className="text-md text-gray-500 mt-3">
                    Free equity investments and flat ₹20 traday and F&O trades
                </h3>
            </div>

            <div className="flex flex-col md:flex-row p-4 mt-5 text-center">
                <div className="w-full md:w-4/12 p-4">
                    <img src="media/pricingEquity.svg" alt="" width={"98%"} />
                    <h1 className="text-lg">Free equity delivery</h1>
                    <p className="text-gray-500">
                        All equity delivery investments (NSE, BSE), are
                        absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="w-full md:w-4/12 p-4">
                    <img src="media/intradayTrades.svg" alt="" width={"98%"} />
                    <h1 className="text-lg">Intraday and F&O trades</h1>
                    <p className="text-gray-500">
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed
                        order on intraday trades across equity, currency, and
                        commodity trades.
                    </p>
                </div>
                <div className="w-full md:w-4/12  p-4">
                    <img src="media/pricingEquity.svg" alt="" width={"98%"} />
                    <h1 className="text-lg">Free direct MF</h1>
                    <p className="text-gray-500">
                        All direct mutual fund investments are absolutely free —
                        ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </>
    );
}
