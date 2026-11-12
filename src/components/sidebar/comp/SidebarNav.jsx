import { NavLink, useLocation } from "react-router-dom";

function SidebarNavItem({ navItem }) {

  const { pathname } = useLocation();
  const { activePath = [navItem.path], lable, icon: Icon, Badge, path, } = navItem;
  const isActive = activePath.includes(pathname)

  return (
    <li
    className=
    {isActive ? 
    `bg-[#e85831]/12 text-[#94361c]  rounded-lg m-2` : 
    `m-2 text-gray-600`}>
      <NavLink to={path} className="flex items-center gap-3 w-full h-14 px-5 text-left text-sm font-medium hover:bg-gray-100 hover:rounded-lg">
          <Icon className="size-5 shrink-0"/>
          <span>
            {lable}
          </span>
          {Badge && <span className="ml-auto bg-[#e85831] px-2 py-0.5 rounded-full text-white text-[12px]">{Badge}</span>}
      </NavLink>
    </li>
  )
}

const SidebarNav = ({items}) => {
  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {items.map((navItem)=>(
          <SidebarNavItem 
            key={navItem.lable} 
            navItem={navItem} 
          />
        ))}
      </ul>
    </div>
  )
}

export default SidebarNav