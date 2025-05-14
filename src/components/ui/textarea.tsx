export default function TextArea({
  label,
  className,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) {
  return (
    <div className="w-full flex flex-col gap-2">
      {rest.name && (
        <label
          htmlFor={rest.name}
          className="text-sm text-neutral-500 font-semibold"
        >
          {label}
        </label>
      )}
      <textarea
        {...rest}
        rows={8}
        className={`p-2 bg-neutral-200 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
          className ?? ""
        }`}
      />
    </div>
  );
}
