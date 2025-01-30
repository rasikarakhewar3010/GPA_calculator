import { useTheme } from "next-themes";

import { MagicCard } from "./ui/magic-card";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-32 w-full flex-col gap-32 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Hey
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Bye
      </MagicCard>
    </div>
  );
}
