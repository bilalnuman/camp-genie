"use client";
import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/shared/Loading";

const CampWrapper = dynamic(() => import("@/features/capm/components/CampWrapper"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const CampItem = dynamic(() => import("@/features/capm/components/cards/CampItem"), {
    ssr: false,
    loading: () => <Loading />,
});


const Camps = () => {


    return (
        <CampWrapper
            filters
            header
        >
            <CampItem />
        </CampWrapper>
    );
};

export default Camps;
