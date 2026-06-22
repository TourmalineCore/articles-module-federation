import { NavItem } from "./types"

const HOST_A_ORIGIN = import.meta.env.DEV ? `http://localhost:4001` : ``
const HOST_B_ORIGIN = import.meta.env.DEV ? `http://localhost:4002` : ``

export const NAV_ITEMS: NavItem[] = [
  {
    label: `Home`,
    path: `/host-a/`,
    origin: HOST_A_ORIGIN,
  },
  {
    label: `About`,
    path: `/host-a/about`,
    origin: HOST_A_ORIGIN,
  },
  {
    label: `Dashboard`,
    path: `/host-b/`,
    origin: HOST_B_ORIGIN,
  },
  {
    label: `Reports`,
    path: `/host-b/reports`,
    origin: HOST_B_ORIGIN,
  },
]
