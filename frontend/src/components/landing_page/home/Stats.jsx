import React from "react";

export default function Stats() {
    return (
        <div className="p-5 m-5">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3">
                <div className="flex gap-2 flex-col w-full md:w-1/2 p-5 md:p-0">
                    <h1 className="mb-5 text-5xl font-semibold">Trust with confidence</h1>
                    <h2 className="text-md text-3xl font-semibold">Customer-first always</h2>
                    <p className="text-gray-500">
                        That's why 1.3+ crore customers trust Zerodha with ₹3.5+
                        lakh crores worth of equity investments.
                    </p>
                    <h2 className="text-md text-3xl font-semibold">No spam or gimmicks</h2>
                    <p className="text-gray-500">
                        No gimmicks, spam, "gamification", or annoying push
                        notifications. High quality apps that you use at your
                        pace, the way you like.
                    </p>
                    <h2 className="text-md text-3xl font-semibold">The Zerodha universe</h2>
                    <p className="text-gray-500">
                        Not just an app, but a whole ecosystem. Our investments
                        in 30+ fintech startups offer you tailored services
                        specific to your needs.
                    </p>
                    <h2 className="text-md text-3xl font-semibold">Do better with money</h2>
                    <p className="text-gray-500">
                        With initiatives like Nudge and Kill Switch, we don't
                        just facilitate transactions, but actively help you do
                        better with your money.
                    </p>
                </div>
                <div className="flex flex-col w-full md:w-1/2 p-5 md:p-0 items-center justify-center">
                    <img
                        src="media/ecosystem.png"
                        alt="ecosystem"
                        style={{ width: "80%" }}
                    />

                    <div className="flex flex-wrap gap-3">
                        <a href="#" className="md:mx-5 mx-0 text-blue-600" style={{textDecoration:"none"}}>Explore Products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="#" style={{textDecoration:"none"}} className="text-blue-600">Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
