import { useState } from "react"

import Sidebar from "../components/sidebar/Sidebar"
import TopNav from "../components/top-nav/TopNav"

import {
  SidebarHeaderSM,
  SidebarNavSM,
  sidebarProfileSM
} from "../data/sidebars/SidebarNavSM"

const SMLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:sticky lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0 bg-white" : "-translate-x-full"
        }`}
      >
        <Sidebar
          nav={SidebarNavSM}
          header={SidebarHeaderSM}
          profile={sidebarProfileSM}
        />
      </div>

      <div className="min-w-0 flex-1 bg-gray-100">

        <TopNav
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="p-6 lg:p-10">
          {children}
        </main>

      </div>
    </div>
  )
}

export default SMLayout