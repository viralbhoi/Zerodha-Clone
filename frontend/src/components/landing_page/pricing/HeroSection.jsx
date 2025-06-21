import React from "react";

export default function HeroSection() {
    return (
        <div className="container">
            <div className="row border-bottom p-5 mt-5 text-center">
                <h1>Pricing</h1>
                <h3 className="fs-5 text-muted mt-3">
                    Free equity investments and flat ₹20 traday and F&O trades
                </h3>
            </div>

            <div className="row p-4 mt-5 text-center">
                <div className="col-4 p-4">
                    <img src="media/pricingEquity.svg" alt="" width={"98%"} />
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE), are
                        absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/intradayTrades.svg" alt="" width={"98%"} />
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted">
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed
                        order on intraday trades across equity, currency, and
                        commodity trades.
                    </p>
                </div>
                <div className="col-4  p-4">
                    <img src="media/pricingEquity.svg" alt="" width={"98%"} />
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free —
                        ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}
