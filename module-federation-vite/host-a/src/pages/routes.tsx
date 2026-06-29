import { HomePage } from './Home'
import { AboutPage } from './About'
import { BASE } from '../nav'

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
