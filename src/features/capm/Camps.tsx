"use client";
import React, { Suspense, useMemo } from "react";
import CampWrapper from "./components/CampWrapper";
import CampItem from "./components/cards/CampItem";
import { useGetCamps } from "./hooks/QueryHook";
import { useSearchParams } from "next/navigation";

const Camps = () => {
    const params = useSearchParams();
    const filters = useMemo(() => {
        const obj: Record<string, any> = {};
        params.forEach((value, key) => {
            if (obj[key]) {
                obj[key] = Array.isArray(obj[key]) ? [...obj[key], value] : [obj[key], value];
            } else {
                obj[key] = value;
            }
        });
        return obj;
    }, [params.toString()]);

    const { data, isLoading } = useGetCamps(filters);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CampWrapper>
                <CampItem />
            </CampWrapper>
        </Suspense>
    );
};

export default Camps;
