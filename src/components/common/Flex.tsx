import { twMerge } from "tailwind-merge";

type FlexProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Flex({ className, children }: FlexProps) {
  return (
    <div className={twMerge("flex items-center", className)}>{children}</div>
  );
}
