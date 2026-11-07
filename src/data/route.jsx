import * as Pages from '@/pages'

export const routes = [

   // Stock Manager
  {
    route: "/stock-summary",
    title: "Stock Summary",
    page: <Pages.StockSummary/>
  },
  {
    route: "/stock-requests",
    title: "Stock Requests",
    page: <Pages.StockRequests/>
  },
  {
    route: "/distribution-runs",
    title: "Distribution Runs",
    page: <Pages.DistributionRuns/>
  },
  {
    route: "/return-approvals",
    title: "Return Approvals",
    page: <Pages.ReturnApprovals/>
  },

  // FDO
  {
    title: "Stock Requests",
    route: "/fdo",
    pages: <Pages.FDOStockRequests/>
  },
  {
    title: "Stock Requests",
    route: "/fdo/stock-requests",
    pages: <Pages.FDOStockRequests/>
  },
  {
    title: "Distributions",
    route: "/fdo/distributions",
    pages: <Pages.FDODistributions/>
  },
  {
    title: "Run History",
    route: "/fdo/run-history",
    pages: <Pages.FDORunHistory/>
  },


]