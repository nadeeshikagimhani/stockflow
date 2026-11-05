import SidebarHeader from "./comp/SidebarHeader"
import SidebarNav from "./comp/SidebarNav"
import SidebarProfile from "./comp/SidebarProfile"

const Sidebar = ({nav, header}) => {
  return (
    <div>
      <SidebarHeader header={header}/>
      <SidebarNav items={nav}/>
      <SidebarProfile/>
    </div>
  )
}

export default Sidebar