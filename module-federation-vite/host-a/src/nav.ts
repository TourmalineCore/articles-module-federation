export const BASE = `/host-a`
export const origin = import.meta.env.VITE_ORIGIN

export const navItems = [
  {
    label: `Home`,
    path: `${BASE}/`,
  },
  {
    label: `About`,
    path: `${BASE}/about`,
  },
]