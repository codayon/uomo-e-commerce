import { twMerge } from "tailwind-merge";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={twMerge("max-w-[1400px] m-auto", className)}>
      {children}
    </div>
  );
}
