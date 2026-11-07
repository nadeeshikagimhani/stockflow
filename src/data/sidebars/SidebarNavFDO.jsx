import {
  ClipboardList,
  History,
  Truck,
} from "lucide-react";

export const sidebarNavFDO = [
  {
    lable: "Stock Requests",
    icon: ClipboardList,
    path: "/fdo/stock-requests",
    activePath: ["/fdo", "/fdo/stock-requests"],
  },
  {
    lable: "Distributions",
    icon: Truck,
    path: "/fdo/distributions",
  },
  {
    lable: "Run History",
    icon: History,
    path: "/fdo/run-history",
  },
];

export const sidebarHeaderFDO = {
  title: "StockFlow",
  subtitle: "FDO Portal",
};

export const sidebarProfileFDO = {
  name: "Pasindu Lakshan",
  role: "Field Distribution Officer",
  detail: "pasindulakshan@gmail.com"
}