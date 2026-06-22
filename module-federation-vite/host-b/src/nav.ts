export const base = `/host-b`
export const origin = import.meta.env.DEV ? `http://localhost:4002` : ``
export const navItems = [
  {
    label: `Dashboard`,
    path: `/host-b/`, 
  },
  {
    label: `Reports`,
    path: `/host-b/reports`, 
  },
]