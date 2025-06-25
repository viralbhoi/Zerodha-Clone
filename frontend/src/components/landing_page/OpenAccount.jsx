import React from "react";

export default function OpenAccount() {
    return (
        <div className="p-5 mb-5">
            <div className="flex flex-col text-center gap-4">
                <h1 className="md:text-5xl text-4xl font-semibold ">Open a Zerodha Account</h1>
                <p className="mb-5">
                    Modern platforms and apps, ₹0 investments, and flat ₹20
                    intraday and F&O trades.
                </p>
                <button className='inline-block px-4 py-2 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700 transition w-1/2 md:w-3/12 m-auto'>
                    Signup Now
                </button>
            </div>
        </div>
    );
}
