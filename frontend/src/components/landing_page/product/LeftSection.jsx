import React from "react";

export default function LeftSection({
    imgUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className=" mb-5">
            <div className="flex flex-col md:flex-row md:p-5 p-0">
                <div className="flex-col md:w-1/2 w-full p-5 mt-0">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="flex-col md:w-1/2 w-full p-5 md:mt-5 mt-0">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>
                            Try Demo{" "}
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>
                        <a
                            href={learnMore}
                            style={{
                                marginLeft: "12%",
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
                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="media/googlePlayBadge.svg" alt="" />
                        </a>
                        <a href={appStore} style={{ marginLeft: "2%" }}>
                            <img src="media/appstoreBadge.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
