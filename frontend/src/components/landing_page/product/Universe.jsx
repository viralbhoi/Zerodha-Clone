import React from "react";

export default function Universe() {
    return (
        <div className="container border-bottom">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p className="mt-3 mb-5">
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>

                <div className="col-4 p-3 mt-5">
                    <img src="media/smallcaseLogo.png" alt="" width={"35%"} />
                    <p className="text-small text-muted mt-3">
                        Thematic investment platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/streakLogo.png" alt="" width={"35%"} />
                    <p className="text-small text-muted mt-3">
                        Algo & strategy platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/sensibullLogo.svg" alt="" width={"35%"} />
                    <p className="text-small text-muted mt-3">
                        Option trading platform
                    </p>
                </div>

                <div className="col-4 p-3 mt-5 mb-5">
                    <img
                        src="media/zerodhaFundhouse.png"
                        alt=""
                        width={"35%"}
                    />
                    <p className="text-small text-muted mt-3">
                        Asset management
                    </p>
                </div>
                <div className="col-4 p-3 mt-5 mb-5">
                    <img src="media/goldenpiLogo.png" alt="" width={"35%"} />
                    <p className="text-small text-muted mt-3">
                        Bonds training platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5 mb-5">
                    <img src="media/dittoLogo.png" alt="" width={"30%"} />
                    <p className="text-small text-muted mt-3">Insurance</p>
                </div>

                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}
