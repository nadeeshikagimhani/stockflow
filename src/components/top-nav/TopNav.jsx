import { Menu } from "lucide-react"

const TopNav = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-10">

      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 hover:bg-gray-100 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </button>

        <h1 className="text-lg font-semibold">
          Stock Manager
        </h1>
      </div>

    </header>
  )
}

export default TopNav