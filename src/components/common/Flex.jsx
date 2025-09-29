import cn from "@/utils/cn";

export default function Flex({ className = "", children }) {
  return <div className={cn("flex items-center", className)}>{children}</div>;
}
