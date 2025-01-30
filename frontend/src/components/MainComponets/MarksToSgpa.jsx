"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "../ui/dot-pattern";
import { RainbowButton } from "../ui/rainbow-button";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Input } from "../ui/input";
import { useState } from "react";
import IconButton from "./IconButton"; // Import IconButton component

export default function MarksToSgpa() {
    const [btnText, setBtnText] = useState("Calculate SGPA >");
    const [subjects, setSubjects] = useState([{ ca1: "", ca2: "", mid: "", end: "", credits: "" }]);
    const [practicals, setPracticals] = useState([]);
    const [sgpa, setSgpa] = useState(null);

    const addSubject = () => {
        setSubjects([...subjects, { ca1: "", ca2: "", mid: "", end: "", credits: "" }]);
    };

    const addPractical = () => {
        setPracticals([...practicals, { ca: "", end: "", credits: "" }]);
    };

    const handleSubjectChange = (index, field, value) => {
        const updatedSubjects = [...subjects];
        updatedSubjects[index][field] = value;
        setSubjects(updatedSubjects);
    };

    const handlePracticalChange = (index, field, value) => {
        const updatedPracticals = [...practicals];
        updatedPracticals[index][field] = value;
        setPracticals(updatedPracticals);
    };

    const calculateSGPA = (e) => {
        e.preventDefault();
        let totalCredits = 0;
        let totalGradePoints = 0;
        let validInput = false;

        subjects.forEach((subject) => {
            const credit = parseFloat(subject.credits);
            const totalMarks = parseFloat(subject.ca1) + parseFloat(subject.ca2) + parseFloat(subject.mid) + parseFloat(subject.end);
            if (credit && !isNaN(totalMarks)) {
                totalCredits += credit;
                totalGradePoints += credit * (totalMarks / 10);
                validInput = true;
            }
        });

        practicals.forEach((practical) => {
            const credit = parseFloat(practical.credits);
            const totalMarks = parseFloat(practical.ca) + parseFloat(practical.end);
            if (credit && !isNaN(totalMarks)) {
                totalCredits += credit;
                totalGradePoints += credit * (totalMarks / 10);
                validInput = true;
            }
        });

        if (!validInput || totalCredits === 0) {
            setSgpa("Invalid input");
            return;
        }

        const calculatedSGPA = totalGradePoints / totalCredits;
        setSgpa(calculatedSGPA.toFixed(2));
        setBtnText("Reset");
    };

    const resetForm = () => {
        setSubjects([{ ca1: "", ca2: "", mid: "", end: "", credits: "" }]);
        setPracticals([]);
        setSgpa(null);
        setBtnText("Calculate SGPA >");
    };

    return (
        <div className="bg-black flex items-center justify-center min-h-screen">
            <IconButton className="z-20 cursor-pointer" />
            <div className="relative w-full max-w-4xl flex-col items-center p-6 md:p-16 justify-center overflow-hidden bg-background md:shadow-xl">
                <p className="z-10 whitespace-pre-wrap text-center text-2xl md:text-4xl font-medium tracking-tighter text-white dark:text-white">
                    Marks to SGPA Calculator
                </p>
                <p className="text-white text-center mt-6 text-sm md:text-base">
                    Note: This tool calculates approximate SGPA based on marks. <br /> Try to open this page in Desktop or in Desktop mode
                </p>
                <div className="flex justify-center mt-8">
                    <form onSubmit={btnText === "Calculate SGPA >" ? calculateSGPA : resetForm} className="w-full">
                        <table className="border-collapse border border-gray-600 w-full">
                            <thead>
                                <tr className="text-gray-300">
                                    <th className="border border-gray-400 p-2 text-sm md:text-base">Subject#</th>
                                    <th className="border border-gray-400 p-2 text-sm md:text-base">CA 1/10</th>
                                    <th className="border border-gray-400 p-2 text-sm md:text-base">CA 2/10</th>
                                    <th className="border border-gray-400 p-2 text-sm md:text-base">Mid Sem/20</th>
                                    <th className="border border-gray-400 p-2 text-sm md:text-base">End Sem/60</th>
                                    <th className="border border-gray-400 p-2 text-sm md:text-base">Credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjects.map((subject, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-400 p-4 px-6 text-white">Subject {index + 1}</td>
                                        <td className="border border-gray-400 p-4 px-6">
                                            <Input
                                                placeholder="Enter CA 1 marks"
                                                type="number"
                                                value={subject.ca1}
                                                onChange={(e) => handleSubjectChange(index, "ca1", e.target.value)}
                                            />
                                        </td>
                                        <td className="border border-gray-400 p-4 px-6">
                                            <Input
                                                placeholder="Enter CA 2 marks"
                                                type="number"
                                                value={subject.ca2}
                                                onChange={(e) => handleSubjectChange(index, "ca2", e.target.value)}
                                            />
                                        </td>
                                        <td className="border border-gray-400 p-4 px-6">
                                            <Input
                                                placeholder="Enter Mid sem marks"
                                                type="number"
                                                value={subject.mid}
                                                onChange={(e) => handleSubjectChange(index, "mid", e.target.value)}
                                            />
                                        </td>
                                        <td className="border border-gray-400 p-4 px-6">
                                            <Input
                                                placeholder="Enter End sem marks"
                                                type="number"
                                                value={subject.end}
                                                onChange={(e) => handleSubjectChange(index, "end", e.target.value)}
                                            />
                                        </td>
                                        <td className="border border-gray-400 p-4 px-6">
                                            <Input
                                                placeholder="Enter Credits of subject"
                                                type="number"
                                                value={subject.credits}
                                                onChange={(e) => handleSubjectChange(index, "credits", e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            <button type="button" className="p-2 rounded w-full sm:w-auto" onClick={addSubject}>
                                <InteractiveHoverButton>Add Subject</InteractiveHoverButton>
                            </button>
                            <button type="button" className="p-2 rounded w-full sm:w-auto" onClick={addPractical}>
                                <InteractiveHoverButton>Add Practical</InteractiveHoverButton>
                            </button>
                        </div>
                        {practicals.length > 0 && (
                            <table className="border-collapse border border-gray-600 mt-4 w-full">
                                <thead>
                                    <tr className="text-gray-300">
                                        <th className="border border-gray-400 p-2 text-sm md:text-base">Practical#</th>
                                        <th className="border border-gray-400 p-2 text-sm md:text-base">End sem/40</th>
                                        <th className="border border-gray-400 p-2 text-sm md:text-base">CA marks/60</th>
                                        <th className="border border-gray-400 p-2 text-sm md:text-base">Credits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {practicals.map((practical, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-400 p-4 px-6 text-white">Practical {index + 1}</td>
                                            <td className="border border-gray-400 p-4 px-6">
                                                <Input
                                                    placeholder="Enter CA marks out of 40"
                                                    type="number"
                                                    value={practical.ca}
                                                    onChange={(e) => handlePracticalChange(index, "ca", e.target.value)}
                                                />
                                            </td>
                                            <td className="border border-gray-400 p-4 px-6">
                                                <Input
                                                    placeholder="Enter End sem marks out of 60"
                                                    type="number"
                                                    value={practical.end}
                                                    onChange={(e) => handlePracticalChange(index, "end", e.target.value)}
                                                />
                                            </td>
                                            <td className="border border-gray-400 p-4 px-6">
                                                <Input
                                                    placeholder="Enter Credits"
                                                    type="number"
                                                    value={practical.credits}
                                                    onChange={(e) => handlePracticalChange(index, "credits", e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        <div className="mt-4 flex justify-center">
                            <button type="submit" className="text-white p-2 rounded">
                                <RainbowButton className="z-10 rounded-2xl">{btnText}</RainbowButton>
                            </button>
                        </div>
                    </form>
                </div>
                {sgpa !== null && sgpa !== "Invalid input" && (
                    <div className="mt-4 text-xl font-bold text-white">
                        Your SGPA: <span className="text-green-500">{sgpa}</span>
                    </div>
                )}
                <DotPattern className={cn("[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]")} />
            </div>
        </div>
    );
}
