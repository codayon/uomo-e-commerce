import { twMerge } from "tailwind-merge";

type ButtonProps = {
  className?: string;
  text: string;
};

export default function Button({ className, text }: ButtonProps) {
  return (
    <span
      className={twMerge(
        "relative inline-block px-0 py-1.5 cursor-pointer font-medium text-sm group",
        className
      )}
    >
      {text}
      <span className="absolute left-0 bottom-0 w-3/5 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
    </span>
  );
}
