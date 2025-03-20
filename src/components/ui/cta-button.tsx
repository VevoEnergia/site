"use client";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text?: string;
  variant?: "filled" | "outline" | "ghost" | "secondary";
  className?: string;
}

export default function CTAButton({
  text = "FALE COM UM CONSULTOR",
  variant = "filled",
  className,
}: CTAButtonProps) {
  const handleClick = () => {
    window.open(
      "https://wa.me/5561999072808/?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21"
    );
  };

  return (
    <button
      data-variant={variant}
      className={cn(
        "drop-shadow-[0px_4px_4px_#00000040] data-[variant=filled]:bg-primary data-[variant=filled]:text-secondary data-[variant=outline]:bg-transparent data-[variant=outline]:text-primary data-[variant=ghost]:bg-white data-[variant=ghost]:text-secondary rounded-full !text-2xl 2xl:text-3xl py-3 px-4 2xl:py-4 2xl:px-5 font-bold w-2/3 min-w-fit text-center hover:scale-105 transition-all duration-300 data-[variant=secondary]:bg-secondary data-[variant=secondary]:text-white",
        className
      )}
      onClick={handleClick}
    >
      {text.slice(0, text.length - 1)}
      <span
        className="data-[variant=filled]:text-white data-[variant=ghost]:text-primary data-[variant=secondary]:text-primary"
        data-variant={variant}
      >
        {text[text.length - 1]}
      </span>
    </button>
  );
}
