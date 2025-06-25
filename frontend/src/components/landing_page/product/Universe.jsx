import React from "react";

export default function Universe() {
    return (
        <div className="border-bottom p-5">
            <div className="flex-col text-center">
                <h1>The Zerodha Universe</h1>
                <p className="mt-3 mb-5">
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>

                <div className="flex flex-wrap justify-center items-center gap-0 text-left">
                    <div className="w-full flex flex-col md:w-4/12 mt-5 justify-center items-center">
                        <img src="media/smallcaseLogo.png" alt="" width={"35%"} />
                        <p className="text-small text-gray-500 mt-3">
                            Thematic investment platform
                        </p>
                    </div>
                    <div className="w-full flex flex-col md:w-4/12 mt-5 justify-center items-center">
                        <img src="media/streakLogo.png" alt="" width={"35%"} />
                        <p className="text-small text-gray-500 mt-3">
                            Algo & strategy platform
                        </p>
                    </div>
                    <div className="w-full flex flex-col md:w-4/12 mt-5 justify-center items-center">
                        <img src="media/sensibullLogo.svg" alt="" width={"35%"} />
                        <p className="text-small text-gray-500 mt-3">
                            Option trading platform
                        </p>
                    </div>

                    <div className="w-full flex flex-col md:w-4/12 mt-5 mb-5 justify-center items-center">
                        <img
                            src="media/zerodhaFundhouse.png"
                            alt=""
                            width={"35%"}
                        />
                        <p className="text-small text-gray-500 mt-3">
                            Asset management
                        </p>
                    </div>
                    <div className="w-full flex flex-col md:w-4/12 mt-5 mb-5 justify-center items-center">
                        <img src="media/goldenpiLogo.png" alt="" width={"35%"} />
                        <p className="text-small text-gray-500 mt-3">
                            Bonds training platform
                        </p>
                    </div>
                    <div className="w-full flex flex-col md:w-4/12 mt-5 mb-5 justify-center items-center">
                        <img src="media/dittoLogo.png" alt="" width={"30%"} />
                        <p className="text-small text-gray-500 mt-3">Insurance</p>
                    </div>
                </div>


                <button className='inline-block px-4 py-2 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700 transition w-1/2 md:w-3/12 m-auto'>
                    Signup Now
                </button>
            </div>
        </div>
    );
}
