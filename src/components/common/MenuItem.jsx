import { NavLink, Link } from "react-router";

export default function MenuItem({ to, label, isNav = false }) {
  return (
    <li>
      {isNav ? (
        <NavLink
          to={to}
          className={({ isActive }) =>
            `relative group py-2 font-medium text-sm ${
              isActive ? "text-c32929" : "text-767676"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {label}
              <span
                className={`absolute left-0 bottom-0 h-0.5 ${
                  isActive
                    ? "bg-c32929 w-full"
                    : "bg-767676 w-0 group-hover:w-full transition-all ease-out duration-300"
                }`}
              ></span>
            </>
          )}
        </NavLink>
      ) : (
        <Link
          to={to}
          className="hover:text-767676 cursor-pointer transition duration-300"
        >
          {label}
        </Link>
      )}
    </li>
  );
}
