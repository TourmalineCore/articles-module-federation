import { NavItem } from "./types"

const {
  VITE_HOST_A_ORIGIN, 
  VITE_HOST_B_ORIGIN, 
} = import.meta.env

export const NAV_ITEMS: NavItem[] = [
  {
    label: `Home`,
    path: `/host-a/`,
    origin: VITE_HOST_A_ORIGIN,
  },
  {
    label: `About`,
    path: `/host-a/about`,
    origin: VITE_HOST_A_ORIGIN,
  },
  {
    label: `Dashboard`,
    path: `/host-b/`,
    origin: VITE_HOST_B_ORIGIN,
  },
  {
    label: `Reports`,
    path: `/host-b/reports`,
    origin: VITE_HOST_B_ORIGIN,
  },
]
