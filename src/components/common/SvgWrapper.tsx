import { twMerge } from "tailwind-merge";

type SvgWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

export default function SvgWrapper({ className, children }: SvgWrapperProps) {
  return <div className={twMerge("cursor-pointer", className)}>{children}</div>;
}
