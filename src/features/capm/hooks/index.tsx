"use client";

import { useDebouncedCallback } from "@/sharedHooks/useDebouncedCallback";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

type FiltersState = {
    search: string;
    location: string;
    priceRange: [number, number];
    type: string;
    transportation: string;
    campTheme: string;
    discount: string;
    days: string[];
};

export const defaultFilters: FiltersState = {
    search: "",
    location: "",
    priceRange: [0, 1000],
    type: "",
    transportation: "no",
    campTheme: "",
    discount: "",
    days: [],
};


const parseRangeParam = (rangeStr: string | null): [number, number] => {
    if (!rangeStr) return [0, 1000];
    const nums = rangeStr.split("-").map(Number);
    return nums.length === 2 && nums.every((n) => !isNaN(n)) ? [nums[0], nums[1]] : [0, 1000];
};

export const useCampHook = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const [filters, setFilters] = useState<FiltersState>(defaultFilters);

    useEffect(() => {
        const urlFilters: FiltersState = {
            search: searchParams.get("search") || "",
            location: searchParams.get("location") || "",
            type: searchParams.get("type") || "",
            transportation: searchParams.get("transportation") || "",
            campTheme: searchParams.get("campTheme") || "",
            discount: searchParams.get("discount") || "",
            days: searchParams.getAll("days") || [],
            priceRange: parseRangeParam(searchParams.get("range")),
        };

        setFilters((prev) => ({
            ...prev,
            ...urlFilters,
        }));
    }, [searchParams]);

    const updateFilters = (newFilters: Partial<FiltersState>) => {
        const updated: FiltersState = { ...filters, ...newFilters };
        setFilters(updated);

        const params = new URLSearchParams();

        if (updated.search) params.set("search", updated.search);
        if (updated.location) params.set("location", updated.location);
        if (updated.type) params.set("type", updated.type);
        if (updated.transportation) params.set("transportation", String(updated.transportation));
        if (updated.campTheme) params.set("campTheme", updated.campTheme);
        if (updated.discount) params.set("discount", updated.discount);
        if (updated.days.length) updated.days.forEach((day) => params.append("days", day));
        if (updated.priceRange) params.set("range", updated.priceRange.join("-"));

        startTransition(() => {
            router.push(`${pathname}?${params.toString()}`, { scroll: false });
        });
    };

    const clearFilters = () => {
        setFilters(defaultFilters);
        router.push(pathname);
    };
    const handleDebouncedSearch = useDebouncedCallback(
        (key, val) => {
            updateFilters({ [key]: val });
        },
        300
    );

    return {
        filters,
        updateFilters,
        handleDebouncedSearch,
        clearFilters,
        isPending,
    };
};
