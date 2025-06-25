import React from "react";

export default function Stats() {
    return (
        <div className="mb-5">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="flex-col w-full md:w-1/2 p-5 md:p-0">
                    <h1 className="mb-5">Trust with confidence</h1>
                    <h2 className="text-md">Customer-first always</h2>
                    <p className="text-gray-500">
                        That's why 1.3+ crore customers trust Zerodha with ₹3.5+
                        lakh crores worth of equity investments.
                    </p>
                    <h2 className="text-md">No spam or gimmicks</h2>
                    <p className="text-gray-500">
                        No gimmicks, spam, "gamification", or annoying push
                        notifications. High quality apps that you use at your
                        pace, the way you like.
                    </p>
                    <h2 className="text-md">The Zerodha universe</h2>
                    <p className="text-gray-500">
                        Not just an app, but a whole ecosystem. Our investments
                        in 30+ fintech startups offer you tailored services
                        specific to your needs.
                    </p>
                    <h2 className="text-md">Do better with money</h2>
                    <p className="text-gray-500">
                        With initiatives like Nudge and Kill Switch, we don't
                        just facilitate transactions, but actively help you do
                        better with your money.
                    </p>
                </div>
                <div className="flex-col w-full md:w-1/2 p-5 md:p-0">
                    <img
                        src="media/ecosystem.png"
                        alt="ecosystem"
                        style={{ width: "90%" }}
                    />

                    <div className="flex flex-wrap gap-3">
                        <a href="#" className="md:mx-5 mx-0" style={{textDecoration:"none"}}>Explore Products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="#" style={{textDecoration:"none"}}>Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
