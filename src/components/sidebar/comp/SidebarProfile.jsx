import { UserRound } from "lucide-react"

const SidebarProfile = ({ profile }) => {
  return (
    <div className="mt-auto border-t border-gray-200 px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-full bg-[#fdf1ed] text-[#a63d1d]">
          <UserRound className="size-5" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium">
            {profile.name}
          </p>

          <p className="truncate text-xs text-gray-500">
            {profile.role}
          </p>
          <p className="truncate text-xs text-gray-500">
            {profile.detail}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SidebarProfile