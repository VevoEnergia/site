import { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  className?: string;
}

export function Title({ className, children }: TextProps) {
  return <h1 className={`text-4xl font-black ${className}`}>{children}</h1>;
}

export function Subtitle({ className, children }: TextProps) {
  return (
    <h2 className={`text-lg xl:text-2xl 2xl:text-3xl font-bold ${className}`}>
      {children}
    </h2>
  );
}

export function Heading({ className, children }: TextProps) {
  return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
}

export function Paragraph({ className, children }: TextProps) {
  return (
    <p className={`text-xs lg:text-sm 2xl:text-lg font-medium ${className}`}>
      {children}
    </p>
  );
}

export function Span({ className, children }: TextProps) {
  return (
    <span className={`text-md font-medium text-text ${className}`}>
      {children}
    </span>
  );
}
