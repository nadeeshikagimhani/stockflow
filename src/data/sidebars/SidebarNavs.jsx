import { BarChart2, Clipboard, PackageCheck, RotateCcw } from "lucide-react";

export const SidebarnavItems = [
  {
    lable: "Stock Summary",
    path: "/stock-summary",
    icon: BarChart2,
    activePath: ["/", "/stock-summary"]
  },
  {
    lable: "Stock Requests",
    path: "/stock-requests",
    icon: Clipboard,
    Badge: 3
  },
  {
    lable: "Distribution Runs",
    path: "/distribution-runs",
    icon: PackageCheck,
  },
  {
    lable: "Return Approvals",
    path: "/return-approvals",
    icon: RotateCcw,
  },
];

export const SidebarHeaderSM = {
  title: "Stock Flow",
  subtitle: "Distribution System"
}