"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "../ui/grid-pattern";
import { TextAnimate } from "../ui/text-animate";
import GreadesToGPA from "../GreadesToGPA";
import IconButton from "./IconButton";

export default function CgpaCreditWise() {
    return (
        <div className="bg-black min-h-screen">
            <IconButton />
            <div className="relative size-full bg-background p-4 md:p-20 md:shadow-xl overflow-hidden">
                {/* Responsive Text */}
                <p className="z-10 whitespace-pre-wrap text-center text-2xl md:text-4xl font-medium tracking-tighter text-white dark:text-black">
                    <TextAnimate animation="slideLeft" by="character">
                        CGPA Calculator: Based on Grades and Credits
                    </TextAnimate>
                </p>

                {/* Responsive Container for GreadesToGPA */}
                <div className="mt-6 w-full max-w-4xl mx-auto px-2 md:px-0">
                    <GreadesToGPA />
                </div>

                {/* Responsive Grid Pattern */}
                <GridPattern
                    width={20}
                    height={20}
                    x={-1}
                    y={-1}
                    className={cn(
                        "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
                        "hidden md:block" // Hide on small screens to avoid clutter
                    )}
                />
            </div>
        </div>
    );
}