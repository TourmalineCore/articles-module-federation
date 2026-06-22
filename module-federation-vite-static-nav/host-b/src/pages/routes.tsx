import { DashboardPage } from './Dashboard'
import { ReportsPage } from './Reports'

const BASE = `/host-b`

export const appRoutes = [
  {
    path: `${BASE}/`,
    Component: DashboardPage,
  },
  {
    path: `${BASE}/reports`,
    Component: ReportsPage,
  },
]
