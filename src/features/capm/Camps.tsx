"use client";
import React from "react";
import dynamic from "next/dynamic";

const CampWrapper = dynamic(() => import("@/features/capm/components/CampWrapper"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const CampItem = dynamic(() => import("@/features/capm/components/cards/CampItem"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});


const Camps = () => {


    return (
        <CampWrapper>
            <CampItem />
        </CampWrapper>
    );
};

export default Camps;
