import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer style={{backgroundColor:"rgb(250,250,250)"}} className="border-top mb-0">
        <div className="flex flex-col mt-5 w-full p-4">
            <div className="flex flex-col flex-nowrap md:flex-row gap-5 mt-2 p-3">
                <div className="flex-col w-full md:w-3/12 ">
                    <img
                        src="media/logo.svg"
                        alt="Logo"
                        style={{ width: "50%" }}
                        className="mb-4"
                    />
                    <p className="fs-7">
                        &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights
                        reserved.
                    </p>
                </div>
                <div className="flex-col w-full md:w-3/12">
                    <p className="font-semibold text-xl mb-4">Company</p>
                    <Link to="/about" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>About</Link>
                    <br />
                    <Link to="/product" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Products</Link>
                    <br />
                    <Link to="/pricing" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Pricing</Link>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Referral programme</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Careers</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Zerodha.tech</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Press & media</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Zerodha cares (CSR)</a>
                    <br />
                </div>
                <div className="flex-col w-full md:w-3/12">
                    <p className="font-semibold text-xl mb-4">Support</p>
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Contact</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Support Portal</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>z-Connect blog</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>list of chages</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Download & resources</a>
                    <br />
                </div>
                <div className="flex-col w-full md:w-3/12">
                    <p className="font-semibold text-xl mb-4">Account</p>
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Open an account</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>Fund Transfer</a>
                    <br />
                    <a href="#" className="!text-gray-500 foot-link" style={{textDecoration : "none"}}>60 day challenge</a>
                    <br />
                </div>
            </div>

            <div className="mt-5 text-gray-500 text-justify flex flex-col gap-4 m-3" style={{ fontSize: "14px" }}>
                <p>
                    Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI
                    Registration no.: INZ000031633 CDSL: Depository services
                    through Zerodha Securities Pvt. Ltd. – SEBI Registration
                    no.: IN-DP-100-2015 Commodity Trading through Zerodha
                    Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
                    INZ000038238 Registered Address: Zerodha Broking Ltd.,
                    #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                    School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
                    India. For any complaints pertaining to securities broking
                    please write to complaints@zerodha.com, for DP related to
                    dp@zerodha.com. Please ensure you carefully read the Risk
                    Disclosure Document as prescribed by SEBI | ICF
                </p>

                <p>
                    Procedure to file a complaint on SEBI SCORES: Register on
                    SCORES portal. Mandatory details for filing complaints on
                    SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
                    Benefits: Effective Communication, Speedy redressal of the
                    grievances
                </p>

                <p>
                    Investments in securities market are subject to market
                    risks; read all the related documents carefully before
                    investing.
                </p>

                <p>
                    "Prevent unauthorised transactions in your account. Update
                    your mobile numbers/email IDs with your stock brokers.
                    Receive information of your transactions directly from
                    Exchange on your mobile/email at the end of the day. Issued
                    in the interest of investors. KYC is one time exercise while
                    dealing in securities markets - once KYC is done through a
                    SEBI registered intermediary (broker, DP, Mutual Fund etc.),
                    you need not undergo the same process again when you
                    approach another intermediary." Dear Investor, if you are
                    subscribing to an IPO, there is no need to issue a cheque.
                    Please write the Bank account number and sign the IPO
                    application form to authorize your bank to make payment in
                    case of allotment. In case of non allotment the funds will
                    remain in your bank account. As a business we don't give
                    stock tips, and have not authorized anyone to trade on
                    behalf of others. If you find anyone claiming to be part of
                    Zerodha and offering such services, please create a ticket
                    here.
                </p>
            </div>

            <div className="foot-bottom">
              <a href="#" className="!text-gray-500 foot-bottom-link">NSE</a>
              <a href="#" className="!text-gray-500 foot-bottom-link">BSE</a>
              <a href="#" className="!text-gray-500 foot-bottom-link">Terms & conditions</a>
              <a href="#" className="!text-gray-500 foot-bottom-link">Policies & procedures</a>
              <a href="#" className="!text-gray-500 foot-bottom-link">Privacy policy</a>
              <a href="#" className="!text-gray-500 foot-bottom-link">Disclosure</a>
            </div>
        </div>
      </footer>
    );
}
