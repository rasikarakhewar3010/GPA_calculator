// import { BlurFadeDemo } from "../BlurFadeDemo";
import { InteractiveGridPatternDemo } from "../InteractiveGridPatternDemo";
import NavBar from "./NavBar";
import { BentoDemo } from "../Tools";
import Footer from "./Footer";
import GreadesToGPA from "../GreadesToGPA";
import { TextAnimate } from "../ui/text-animate";
import IconButton from "./IconButton";
// import { useEffect, useState } from "react";
// import SpinnerLoader from '../SpinnerLoader';

export default function Home() {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 1500);
    // }, []);

    return (
        <div className="bg-black">
            <IconButton />

            <>
                <NavBar />
                <div>
                    <InteractiveGridPatternDemo />
                </div>
                <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-36 my-6 sm:my-8 md:my-10">
                    <BentoDemo />
                </div>


                <div className="my-4 pt-4">
                    <div>
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            className="text-white text-center font-semibold 
                   text-lg sm:text-xl md:text-2xl lg:text-4xl"
                        >
                            CGPA Calculator: Based on grades and credits
                        </TextAnimate>
                    </div>


                    <GreadesToGPA />
                </div>
                <Footer />
            </>
        </div>
    );
}
