import React from "react";

export default function Input({
  label,
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <div className="flex flex-col gap-2">
      {rest.name && (
        <label
          htmlFor={rest.name}
          className="text-sm text-neutral-500 font-semibold"
        >
          {label}
        </label>
      )}
      <input
        {...rest}
        className={`p-2 bg-neutral-200 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
          className ?? ""
        }`}
      />
    </div>
  );
}
