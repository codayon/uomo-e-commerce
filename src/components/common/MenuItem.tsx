import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

type MenuItemProps = {
  to: string;
  label: string;
  className?: string;
  classBottom?: string;
};

export default function MenuItem({
  to,
  label,
  className,
  classBottom,
}: MenuItemProps) {
  return (
    <li>
      <Link
        to={to}
        className={twMerge(
          "relative inline-block px-0 py-1.5 font-medium hover:text-gray-900 transition duration-500 group",
          className
        )}
      >
        {label}
        <span
          className={twMerge(
            "absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-500 ease-out",
            classBottom
          )}
        ></span>
      </Link>
    </li>
  );
}
