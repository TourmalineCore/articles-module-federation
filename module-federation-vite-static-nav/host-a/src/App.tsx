import { appRoutes } from './pages/routes'
import Layout from 'layout/layout'

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <Layout routes={appRoutes} />
  )
}
