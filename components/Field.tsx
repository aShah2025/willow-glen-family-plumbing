import type { ReactNode } from "react";

/** Label and inline error for a control. The control must use id, and `${id}-error` for aria-describedby. */
export default function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-semibold text-navy-900">
        {label}
        {optional && <span className="font-normal text-navy-600"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
