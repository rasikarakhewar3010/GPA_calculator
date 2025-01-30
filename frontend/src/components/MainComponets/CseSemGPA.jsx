"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GridPattern } from "../ui/grid-pattern";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { RainbowButton } from "../ui/rainbow-button";
import IconButton from "./IconButton";

// Grade points mapping
const gradePoints = {
    EX: 10,
    AA: 9.0,
    AB: 8.5,
    BB: 8.0,
    BC: 7.5,
    CC: 7.0,
    CD: 6.5,
    DD: 6.0,
    DE: 5.5,
    EE: 5.0,
    FF: 0.0,
};

// JSON data for CSE semesters
const cseData = {
    CSE: {
        "Semester III": [
            { subject: "Engineering Mathematics III", credits: 4 },
            { subject: "Discrete Mathematics", credits: 4 },
            { subject: "Data Structures", credits: 4 },
            { subject: "Computer Architecture & Organization", credits: 4 },
            { subject: "Elective I", credits: 4 },
            { subject: "Data Structures & Object Oriented Programming Lab", credits: 2 },
            { subject: "Seminar I", credits: 2 },
            { subject: "Field Training / Internship", credits: "Audit" },
        ],
        "Semester IV": [
            { "subject": "Design & Analysis of Algorithms", "credits": 4 },
            { "subject": "Operating Systems", "credits": 4 },
            { "subject": "Basic Human Rights", "credits": 3 },
            { "subject": "Probability and Statistics", "credits": 3 },
            { "subject": "Digital Logic Design & Microprocessors", "credits": 3 },
            { "subject": "Operating Systems & Python Programming Lab", "credits": 3 },
            { "subject": "Seminar II", "credits": 2 },
            { "subject": "Field Training / Internship", "credits": "Audit" }
        ],
        "Semester V": [
            { "subject": "Database Systems", "credits": 4 },
            { "subject": "Theory of Computation", "credits": 4 },
            { "subject": "Software Engineering", "credits": 4 },
            { "subject": "Elective II", "credits": 3 },
            { "subject": "Elective III", "credits": 3 },
            { "subject": "Database Systems & Software Engineering Lab", "credits": 2 },
            { "subject": "Mini-project I", "credits": 2 },
            { "subject": "Field Training / Internship", "credits": "Audit" }
        ],
        "Semester VI": [
            { "subject": "Compiler Design", "credits": 4 },
            { "subject": "Computer Networks", "credits": 4 },
            { "subject": "Machine Learning", "credits": 4 },
            { "subject": "Elective IV", "credits": 3 },
            { "subject": "Elective V", "credits": 3 },
            { "subject": "Competitive Programming & Machine Learning Lab", "credits": 3 },
            { "subject": "Mini-project II", "credits": 2 },
            { "subject": "Field Training / Internship", "credits": "Audit" }
        ],
        "Semester VII": [
            { "subject": "Artificial Intelligence", "credits": 3 },
            { "subject": "Cloud Computing", "credits": 3 },
            { "subject": "Elective VI", "credits": 3 },
            { "subject": "Open Elective VII", "credits": 3 },
            { "subject": "Open Elective VIII", "credits": 3 },
            { "subject": "Artificial Intelligence & Cloud Computing Lab", "credits": 2 },
            { "subject": "Project Phase I", "credits": 2 },
            { "subject": "Field Training / Internship", "credits": "Audit" }
        ],
        "Semester VIII": [
            { "subject": "Project Phase II (In-house) / Internship", "credits": 12 }
        ]
    },
};

export default function CseSemGPA() {
    const [selectedSemester, setSelectedSemester] = useState("Semester III");
    const [grades, setGrades] = useState([]);
    const [gpa, setGpa] = useState(null);
    const [isResetMode, setIsResetMode] = useState(false);

    const subjects = cseData.CSE[selectedSemester] || [];

    const handleGradeChange = (index, value) => {
        const updatedGrades = [...grades];
        updatedGrades[index] = value;
        setGrades(updatedGrades);
    };

    const calculateGPA = (e) => {
        e.preventDefault();

        if (isResetMode) {
            resetForm();
            return;
        }

        let totalCredits = 0;
        let totalGradePoints = 0;
        let validInput = false;

        subjects.forEach((subject, index) => {
            if (subject.credits !== "Audit") {
                const grade = grades[index];
                const gradePoint = gradePoints[grade] || 0;
                totalCredits += subject.credits;
                totalGradePoints += gradePoint * subject.credits;
                validInput = grade in gradePoints;
            }
        });

        if (!validInput || totalCredits === 0) {
            setGpa("Invalid input");
            return;
        }

        const calculatedGPA = totalGradePoints / totalCredits;
        setGpa(calculatedGPA.toFixed(2));
        setIsResetMode(true);
    };

    const resetForm = () => {
        setGrades([]);
        setGpa(null);
        setIsResetMode(false);
    };

    return (
        <div className="bg-black flex flex-col items-center justify-center min-h-screen p-6">
            <IconButton className="absolute top-4 right-4 z-50" />
            <div className=" z-10 relative w-full max-w-4xl p-8 bg-background rounded-xl shadow-lg">
                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
                    CSE SGPA Calculator
                </h1>

                <div className="flex items-center justify-center">
                <form onSubmit={calculateGPA} className="space-y-6">
                    <div className="flex justify-center mb-6">
                        <select
                            value={selectedSemester}
                            onChange={(e) => setSelectedSemester(e.target.value)}
                            className="p-2 rounded-lg bg-gray-800 text-white w-full sm:w-1/2 z-10"
                        >
                            {Object.keys(cseData.CSE).map((semester) => (
                                <option key={semester} value={semester}>
                                    {semester}
                                </option>
                            ))}
                        </select>
                    </div>

                    <table className="w-full border-collapse border border-gray-700">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="border border-gray-700 p-2">Subject</th>
                                <th className="border border-gray-700 p-2">Credits</th>
                                <th className="border border-gray-700 p-2">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject, index) => (
                                <tr key={index} className="text-white">
                                    <td className="border border-gray-700 p-2">{subject.subject}</td>
                                    <td className="border border-gray-700 p-2 text-center">{subject.credits}</td>
                                    <td className="border border-gray-700 p-2 text-center">
                                        {subject.credits !== "Audit" ? (
                                            <Select
                                                value={grades[index] || ""}
                                                onValueChange={(value) => handleGradeChange(index, value)}
                                            >
                                                <SelectTrigger className="z-10 w-full bg-gray-800">
                                                    <SelectValue placeholder="Select Grade" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.keys(gradePoints).map((grade) => (
                                                        <SelectItem key={grade} value={grade}>
                                                            {grade}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        ) : (
                                            "Audit"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className=" z-10 text-white p-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500"
                        >
                            <RainbowButton>{isResetMode ? "Reset" : "Calculate GPA"}</RainbowButton>
                        </button>
                    </div>
                </form>
                </div>

                {gpa !== null && (
                    <div className="mt-6 text-center text-xl font-bold text-white">
                        {gpa === "Invalid input" ? (
                            <span className="text-red-500">Please select valid grades</span>
                        ) : (
                            <span>
                                Your GPA: <span className="text-green-500">{gpa}</span>
                            </span>
                        )}
                    </div>
                )}

                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                    )}
                />
            </div>
        </div>
    );
}
