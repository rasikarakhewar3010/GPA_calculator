"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { DotPattern } from "../ui/dot-pattern";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { RainbowButton } from "../ui/rainbow-button";
import { TextAnimate } from "../ui/text-animate";
import IconButton from "./IconButton";

export default function SgpaToCgpa() {
    const [semesters, setSemesters] = useState(1);
    const [sgpaValues, setSgpaValues] = useState(Array(semesters).fill(""));
    const [cgpa, setCgpa] = useState(null);

    // Handle semester selection
    const handleSemesterChange = (value) => {
        const semCount = parseInt(value.replace("sem", ""), 10);
        setSemesters(semCount);
        setSgpaValues(Array(semCount).fill("")); // Reset SGPA values when semester count changes
    };

    // Handle SGPA input change
    const handleSgpaChange = (index, value) => {
        const newSgpaValues = [...sgpaValues];
        newSgpaValues[index] = value;
        setSgpaValues(newSgpaValues);
    };

    // Calculate CGPA
    const calculateCgpa = (e) => {
        e.preventDefault();
        const validSgpas = sgpaValues
            .map((sgpa) => parseFloat(sgpa))
            .filter((sgpa) => !isNaN(sgpa) && sgpa >= 0 && sgpa <= 10); // Ensure valid input range

        if (validSgpas.length === semesters) {
            const total = validSgpas.reduce((sum, sgpa) => sum + sgpa, 0);
            setCgpa((total / semesters).toFixed(2)); // Calculate average and round to 2 decimals
        } else {
            alert("Please enter valid SGPA values (0-10) for all semesters.");
            setCgpa(null);
        }
    };

    return (
        <div className="h-auto min-h-screen bg-black w-full p-6 md:p-10 shadow-xl">
            <IconButton />
            <p className="z-10 text-center text-3xl sm:text-4xl font-medium tracking-tighter text-white">
                <TextAnimate animation="slideLeft" by="character">
                    SGPA TO CGPA
                </TextAnimate>
            </p>

            <div className="flex justify-center mt-10 mx-4 sm:mx-10">
                <form onSubmit={calculateCgpa} className="w-full max-w-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <h3 className="text-white text-lg sm:text-3xl">Semesters Completed:</h3>
                        <Select onValueChange={handleSemesterChange}>
                            <SelectTrigger className="w-full sm:w-[180px]">
                                <SelectValue placeholder="Select Semesters" />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from({ length: 8 }, (_, i) => (
                                    <SelectItem key={i} value={`sem${i + 1}`}>
                                        Semester {i + 1}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="mt-6">
                        {Array.from({ length: semesters }, (_, index) => (
                            <div key={index} className="z-10 my-4">
                                <span className="text-white block">Semester {index + 1}</span>
                                <Input
                                    placeholder={`Enter SGPA for Semester ${index + 1}`}
                                    value={sgpaValues[index]}
                                    onChange={(e) => handleSgpaChange(index, e.target.value)}
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.01"
                                    className="w-full"
                                />
                            </div>
                        ))}
                    </div>

                    {semesters > 0 && (
                        <div className="flex justify-center items-center z-10">
                            <RainbowButton type="submit" className="my-6 w-full sm:w-auto z-10">
                                Calculate CGPA
                            </RainbowButton>
                        </div>
                    )}
                </form>
            </div>

            {cgpa !== null && (
                <div className="text-center text-white text-2xl sm:text-3xl mt-6">
                    Your CGPA: <span className="font-bold text-green-400">{cgpa}</span>
                </div>
            )}

            <DotPattern
                width={15}
                height={15}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
                )}
            />
        </div>
    );
}
