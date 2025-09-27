import { twMerge } from "tailwind-merge";

export default function Button({ className = "", label = "" }) {
  return (
    <button
      className={twMerge(
        "relative group py-2 cursor-pointer font-medium text-sm",
        className
      )}
    >
      {label}
      <span className="bg-black absolute left-0 bottom-0 w-3/5 h-0.5 group-hover:w-full transition-all ease-out duration-500"></span>
    </button>
  );
}
