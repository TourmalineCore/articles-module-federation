import { HomePage } from './Home'
import { AboutPage } from './About'

const BASE = `/host-a`

export const appRoutes = [
  {
    path: `${BASE}/`,
    Component: HomePage,
  },
  {
    path: `${BASE}/about`,
    Component: AboutPage,
  },
]
