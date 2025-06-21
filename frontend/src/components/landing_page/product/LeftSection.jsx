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
        <div className="container mb-5">
            <div className="row">
                <div className="col p-5 mt-0">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="col p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>
                            Try Demo{" "}
                            <i
                                class="fa fa-long-arrow-right"
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
                                class="fa fa-long-arrow-right"
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
