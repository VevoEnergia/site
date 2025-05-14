import React from "react";

interface PhoneInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
  > {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PhoneInput({
  label,
  className,
  name,
  value,
  onChange,
  ...rest
}: PhoneInputProps) {
  const formatPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 11); // máx. 11 dígitos

    const ddd = digits.slice(0, 2);
    const firstPart = digits.slice(2, 7);
    const secondPart = digits.slice(7, 11);

    let formatted = "";

    if (ddd) formatted += `(${ddd}`;
    if (ddd.length === 2) formatted += `) `;
    if (firstPart) formatted += firstPart;
    if (secondPart) formatted += `-${secondPart}`;

    return formatted;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
    const event = {
      ...e,
      target: {
        ...e.target,
        name,
        value: raw,
      },
    };
    onChange(event as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col gap-2">
      {name && (
        <label
          htmlFor={name}
          className="text-sm text-neutral-500 font-semibold"
        >
          {label}
        </label>
      )}
      <input
        {...rest}
        id={name}
        name={name}
        inputMode="numeric"
        placeholder="(XX) XXXXX-XXXX"
        value={formatPhone(value)}
        onChange={handleInputChange}
        className={`p-2 bg-neutral-200 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
          className ?? ""
        }`}
      />
    </div>
  );
}
