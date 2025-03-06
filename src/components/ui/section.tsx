import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children?: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`${className} w-screen px-6 sm:px-8 lg:px-32 2xl:px-60 2xl:py-16 py-8 snap-start`}
    >
      {children}
    </section>
  );
}
