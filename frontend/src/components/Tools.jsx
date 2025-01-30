import {
  Calculator,
  Percent,
  BookOpen,
  ClipboardList,
  Laptop,
} from "lucide-react";

import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { TextAnimate } from "./ui/text-animate";

const features = [
  {
    Icon: Calculator,
    name: "SGPA TO CGPA",
    description: "Easily convert your semester-wise SGPA to cumulative CGPA using our accurate calculator.",
    href: "/sgpatocgpa",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="https://i.pinimg.com/736x/eb/d8/9e/ebd89efec686d1dc67c18a99c48dbc80.jpg" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Percent,
    name: "SGPA TO %",
    description: "Convert your SGPA to percentage effortlessly with our reliable conversion tool.",
    href: "/sgpatppercentage",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="https://i.pinimg.com/736x/af/53/6c/af536cc7d26960db24e5b639e02ada30.jpg" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: BookOpen,
    name: "GRADES TO GPA",
    description: "Convert your subject-wise grades into GPA with a detailed breakdown and insights.",
    href: "/cgpacreditwise",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="https://i.pinimg.com/736x/d1/7d/58/d17d585ee941c954de56903b913c4ff3.jpg" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: ClipboardList,
    name: "MARKS TO GPA",
    description: "Calculate your GPA based on your obtained marks across different subjects.",
    href: "/markstosgpa",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="https://i.pinimg.com/736x/a3/3b/d6/a33bd6497015332bb935959c88758bd3.jpg" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Laptop,
    name: "SEMESTER GPA FOR CSE",
    description: "Get an estimated GPA for each semester in the Computer Science Engineering curriculum.",
    href: "/csesgpa",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="https://i.pinimg.com/736x/09/3f/67/093f6715d49d8f14a65c5c8a56050b34.jpg" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function BentoDemo() {
  return (
    <>
      <div className="flex justify-center">
        <TextAnimate animation="blurInUp" by="character" className="text-white mb-8 text-2xl sm:text-3xl md:text-4xl font-semibold">
          Tools
        </TextAnimate>
      </div>
      <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}