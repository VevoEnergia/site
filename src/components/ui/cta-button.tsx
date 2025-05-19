"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const navigateContact = () => {
    router.push("#contact-form");
  };

  return (
    <button
      data-variant={variant}
      className={cn(
        "drop-shadow-[0px_4px_4px_#00000040] data-[variant=filled]:bg-primary data-[variant=filled]:text-secondary data-[variant=outline]:bg-transparent data-[variant=outline]:text-primary data-[variant=ghost]:bg-white data-[variant=ghost]:text-secondary rounded-full !text-2xl 2xl:text-3xl py-3 px-4 2xl:py-4 2xl:px-5 font-bold w-2/3 min-w-fit text-center hover:scale-105 transition-all duration-300 data-[variant=secondary]:bg-secondary data-[variant=secondary]:text-white",
        className
      )}
      onClick={navigateContact}
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
