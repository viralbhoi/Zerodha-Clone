import React from "react";

export default function RightSection({
    imgUrl,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className="my-2 mx-5 p-5">
            <div className="flex flex-col md:flex-row md:p-5 p-0 justify-center items-center">
                <div className="flex-col md:w-1/2 w-full p-5 md:mt-5 mt-0">
                    <h1 className="font-semibold text-3xl md:text-4xl py-4">{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="text-blue-600">
                        <a
                            href={learnMore}
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            Learn More{" "}
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>
                </div>
                <div className="flex-col md:w-1/2 w-full p-5 mt-0">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    );
}
