"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";
import { Input } from "../ui/input";
import { RainbowButton } from "../ui/rainbow-button";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import IconButton from "./IconButton";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function SgpaToPercentage() {
    const [sgpa, setSgpa] = useState("");
    const [percentage, setPercentage] = useState(null);
    const [btnText, setBtnText] = useState("Calculate Percentage");

    const handleCalculate = () => {
        if (!sgpa || isNaN(sgpa) || sgpa < 0 || sgpa > 10) {
            alert("Please enter a valid SGPA between 0 and 10.");
            return;
        }
        const calculatedPercentage = (parseFloat(sgpa) * 10) - 7.5;
        setPercentage(calculatedPercentage.toFixed(2));
        setBtnText("Recalculate");
    };

    const pieData = {
        labels: ["Percentage", "Remaining"],
        datasets: [
            {
                data: [percentage || 0, 100 - (percentage || 0)],
                backgroundColor: ["#4CAF50", "#E0E0E0"],
                hoverBackgroundColor: ["#45A049", "#BDBDBD"],
            },
        ],
    };

    return (
        <div className="bg-black min-h-screen flex items-center overflow-hidden justify-center">
            <IconButton />
            <div className="z-10 relative w-full max-w-md p-10 rounded-lg  shadow-xl">
                <p className="z-10 text-center text-4xl font-bold tracking-tighter text-white">
                    SGPA to Percentage Calculator
                </p>
                <div className="mt-8 flex flex-col gap-4">
                    <Input
                        placeholder="Enter SGPA"
                        value={sgpa}
                        onChange={(e) => setSgpa(e.target.value)}
                        className="z-10 text-lg p-3 rounded-md"
                    />
                    <RainbowButton
                        className="z-10 rounded-2xl p-3 text-lg font-medium"
                        onClick={handleCalculate}
                    >
                        {btnText}
                    </RainbowButton>
                </div>
                {percentage !== null && (
                    <div className="mt-8 text-center text-white text-xl">
                        <p>Your Percentage: <span className="text-green-400">{percentage}%</span></p>
                        <div className="mt-6">
                            <Pie data={pieData} />
                        </div>
                    </div>
                )}
                <InteractiveGridPattern
                    className={cn(
                        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12"
                    )}
                />
            </div>
        </div>
    );
}