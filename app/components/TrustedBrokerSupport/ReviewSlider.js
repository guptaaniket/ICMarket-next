"use client";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() => import("./TrustedBrokerSupport"), { ssr: false });

export default ReviewSlider;