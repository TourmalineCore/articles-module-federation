export const base = `/host-a`
export const origin = import.meta.env.DEV ? `http://localhost:4001` : ``
export const navItems = [
  {
    label: `Home`,
    path: `/host-a/`,
  },
  {
    label: `About`,
    path: `/host-a/about`,
  },
]