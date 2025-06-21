import React from "react";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

export default function WatchListActions({ uid }) {
    return (
        <span className="actions">
            <span>
                <Tooltip
                    Title="Buy (B)"
                    placement="top"
                    arrow
                    // TransitionComponent={Grow}
                >
                    <button className="buy">Buy</button>
                </Tooltip>

                <Tooltip
                    Title="Sell (S)"
                    placement="top"
                    arrow
                    // TransitionComponent={Grow}
                >
                    <button className="sell">Sell</button>
                </Tooltip>

                <Tooltip
                    Title="Analytics (A)"
                    placement="top"
                    arrow
                    // TransitionComponent={Grow}
                >
                    <button className="action"><BarChartOutlined/></button>
                </Tooltip>

                <Tooltip
                    Title="More"
                    placement="top"
                    arrow
                    // TransitionComponent={Grow}
                >
                    <button className="action"><MoreHoriz/></button>
                </Tooltip>
            </span>
        </span>
    );
}
