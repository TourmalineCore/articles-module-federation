import { Suspense, lazy } from 'react'
import { appRoutes } from './pages/routes'

const Layout = lazy(() => import(`layout/layout`))

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <Suspense fallback={
      <div>Loading layout…</div>
    }>
      <Layout
        routes={appRoutes}
      />
    </Suspense>
  )
}
