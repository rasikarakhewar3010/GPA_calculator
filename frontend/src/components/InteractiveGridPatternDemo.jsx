"use client";

import { cn } from "../lib/utils";
import { RainbowButtonDemo } from "./RainbowButtonDemo";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";
import { NeonGradientCardDemo } from "./NeonGradientCardDemo";
import { TextAnimate } from "./ui/text-animate";

export function InteractiveGridPatternDemo() {
    return (
        <div className="relative flex h-[90vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            {/* Responsive Text */}
            <p className="z-10 text-center text-4xl font-medium tracking-tighter text-white dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <TextAnimate animation="blurInUp" by="character">
                    Calculate your CGPA
                </TextAnimate>
            </p>

            {/* Responsive Button */}
            <div className="z-10 m-6 flex items-center justify-center sm:m-8 md:m-10 lg:m-14">
                <RainbowButtonDemo />
            </div>

            {/* Responsive Neon Gradient Card */}
            <div className="m-4 flex items-center justify-center cursor-pointer sm:m-6 md:m-8 lg:m-10">
                <NeonGradientCardDemo />
            </div>

            {/* Interactive Grid Pattern */}
            <InteractiveGridPattern
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                )}
                width={20}
                height={20}
                squares={[120, 120]}
                squaresClassName="hover:fill-blue-500"
            />
        </div>
    );
}