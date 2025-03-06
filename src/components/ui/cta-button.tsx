import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text?: string;
  variant?: "filled" | "outline" | "ghost";
  className?: string;
}

export default function CTAButton({
  text = "FALE COM UM CONSULTOR",
  variant = "filled",
  className,
}: CTAButtonProps) {
  return (
    <button
      data-variant={variant}
      className={cn(
        "drop-shadow-[0px_4px_4px_#00000040] data-[variant=filled]:bg-primary data-[variant=filled]:text-white data-[variant=outline]:bg-transparent data-[variant=outline]:text-primary data-[variant=ghost]:bg-white data-[variant=ghost]:text-secondary rounded-full text-xs sm:text-base xl:text-2xl py-4 px-5 font-bold w-2/3 min-w-fit text-center hover:scale-105 transition-all duration-300",
        className
      )}
    >
      {text}
    </button>
  );
}
