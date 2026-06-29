export const BASE = `/host-b`
export const origin = import.meta.env.VITE_ORIGIN

export const navItems = [
  {
    label: `Dashboard`,
    path: `${BASE}/`,
  },
  {
    label: `Reports`,
    path: `${BASE}/reports`,
  },
]