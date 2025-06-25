import React from "react";

export default function RightSection({
    imgUrl,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className="">
            <div className="flex flex-col-reverse md:flex-row md:p-5 p-0">
                <div className="flex-col md:w-1/2 w-full p-5 md:mt-5 mt-0">
                    <h1 className="mt-5 pt-5">{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a
                            href={learnMore}
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            Learn More{" "}
                            <i
                                class="fa fa-long-arrow-right"
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
