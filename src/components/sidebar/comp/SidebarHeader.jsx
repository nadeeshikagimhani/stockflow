import { BarChart3 } from "lucide-react"

const SidebarHeader = ({ header }) => {
  return (
    <div className="flex h-16 items-center gap-3 border-b px-5">

      <div className="flex size-10 items-center justify-center rounded-lg bg-[#e85831] text-white shadow-lg">
        <BarChart3 className="size-6" strokeWidth={2.25} />
      </div>

      <div className="leading-tight">
        <p className="text-md font-semibold text-foreground">
          {header.title}
        </p>

        <p className="text-[11px] text-muted-foreground">
          {header.subtitle}
        </p>
      </div>

    </div>
  )
}

export default SidebarHeader