import { twMerge } from "tailwind-merge";

export default function Flex({ className = "", children }) {
  return (
    <div className={twMerge("flex items-center", className)}>{children}</div>
  );
}
