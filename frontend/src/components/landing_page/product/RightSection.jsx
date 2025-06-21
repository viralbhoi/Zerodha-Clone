import React from "react";

export default function RightSection({
    imgUrl,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col p-5 mt-5 d-flex flex-column justify-content-flex-start">
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
                <div className="col p-5">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    );
}
