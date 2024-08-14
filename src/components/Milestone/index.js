import React from "react";
import { Chrono } from "react-chrono";
import data from "./data";


export default function Milestone() {
    return (
        <div className="App">
            <div style={{ width: "95%" }}>
                <Chrono
                    items={data}
                    mode="HORIZONTAL"
                    showAllCardsHorizontal
                    disableToolbar={true}
                    cardWidth={450}
                    cardHeight={350}
                    contentDetailsHeight={100}
                    borderLessCards={true}
                    textOverlay={true}
                    slideShow
                />
            </div>
        </div>
    );
}