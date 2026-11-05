import { NavLink } from "react-router-dom"

const SidebarNav = ({ items }) => {
  return (
    <nav className="mt-4">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.lable}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 h-14 px-5 text-sm font-medium rounded-lg ${
                  isActive
                    ? "bg-[#e85831]/12 text-[#94361c]"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <item.icon className="size-5 shrink-0" />

              <span>{item.lable}</span>

              {item.badge && (
                <span className="ml-auto rounded-full bg-[#e85831] px-2 py-0.5 text-xs text-white">
                  {item.badge}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SidebarNav