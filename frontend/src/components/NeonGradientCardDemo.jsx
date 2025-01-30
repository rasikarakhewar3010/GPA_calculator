import { NeonGradientCard } from "./ui/neon-gradient-card";


export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className=" z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Explor Tools given Below
      </span>
    </NeonGradientCard>
  );
}
