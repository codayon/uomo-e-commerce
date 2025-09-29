import cn from "@/utils/cn";

export default function Button({
  btnClassName = "",
  spanClassName = "",
  label = "",
}) {
  return (
    <button
      className={cn(
        "relative group py-2 cursor-pointer font-medium text-sm",
        btnClassName
      )}
    >
      {label}
      <span
        className={cn(
          "bg-black absolute left-0 bottom-0 w-3/5 h-0.5 group-hover:w-full transition-all ease-out duration-500",
          spanClassName
        )}
      ></span>
    </button>
  );
}
