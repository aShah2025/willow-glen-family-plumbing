const paths = {
  drop: "M12 3s6.5 6.6 6.5 11a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3z",
  flame:
    "M12 3c1 3.5 5 5.6 5 10.5a5 5 0 0 1-10 0c0-2 1-3.4 2-4.5.3 1.6 1 2.5 2 3 .5-3-.5-6 1-9z",
  drain: "M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0M9 9v6M12 9v6M15 9v6",
  pipe: "M3 6h10a5 5 0 0 1 5 5v10M3 12h8a1.5 1.5 0 0 1 1.5 1.5V21",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  shield: "M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5",
  tag: "M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9zM7.5 7.5h.01",
  clock: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18zM12 7v5l3 2",
  check: "M5 12.5l4.5 4.5L19 7.5",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  pin: "M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
};

export type IconName = keyof typeof paths;

export default function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      <path d={paths[name]} />
    </svg>
  );
}
