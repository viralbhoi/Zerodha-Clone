import React from "react";

export default function Brokerage() {
    return (
        <>
            <div className="flex flex-col md:flex-row p-4 mt-5 text-center border-t">
                <div className="w-full md:w-8/12 p-4">
                    <a href="#" style={{ textDecoration: "none" }}>
                        <h3 className="text-3xl mb-5">Brokerage calculator</h3>
                    </a>
                        <ul
                            style={{
                                textAlign: "left",
                                lineHeight: "2.5",
                                fontSize: "1em",
                            }}
                            className="text-gray-500"
                            >
                            <li>
                                Call & Trade and RMS auto-squareoff:Additional
                                charges of ₹50 + GST per order.
                            </li>
                            <li>
                                Digital contract notes will be sent via e-mail.
                            </li>
                            <li>
                                Physical copies of contract notes, if required,
                                shall be charged ₹20 per contract note. Courier
                                charges apply.
                            </li>
                            <li>
                                For NRI account (non-PIS), 0.5% or ₹100 per
                                executed order for equity (whichever is lower).
                            </li>
                            <li>
                                For NRI account (PIS), 0.5% or ₹200 per executed
                                order for equity (whichever is lower).
                            </li>
                            <li>
                                If the account is in debit balance, any order
                                placed will be charged ₹40 per executed order
                                instead of ₹20 per executed order.
                            </li>
                        </ul>
                </div>
                <div className="w-full md:w-4/14 p-4">
                    <a href="#" style={{ textDecoration: "none" }}>
                        <h3 className="text-3xl mb-5">List of charges</h3>
                    </a>
                </div>
            </div>
        </>
    );
}
