"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "../ui/grid-pattern";
import { TextAnimate } from "../ui/text-animate";
import GreadesToGPA from "../GreadesToGPA";
import IconButton from "./IconButton";

export default function CgpaCreditWise() {
    return (
        <div className="bg-black h-screen">
            <IconButton/>
            <div className="relative  size-full   bg-background p-20 md:shadow-xl">
                <p className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-white dark:text-black">
                    <TextAnimate animation="slideLeft" by="character">
                        CGPA Calculator: Based on Grades and Credits
                    </TextAnimate>
                </p>
                <div>
                    <GreadesToGPA />
                </div>
                <GridPattern
                    width={20}
                    height={20}
                    x={-1}
                    y={-1}
                    className={cn(
                        "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                    )}
                />
                
            </div>

        </div>
    )
}