import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import type { RouteConfig } from './types'
import './layout.css'
import { NAV_ITEMS } from './nav'

// eslint-disable-next-line import/no-default-export
export default function Layout({
  routes,
}: {
  routes: RouteConfig[],
}) {
  return (
    <BrowserRouter>
      <div className="layout">
        <header className="header">
          <span className="header__logo">MF Demo</span>
        </header>
        <div className="body">
          <aside className="sidebar">
            <nav>
              <ul>
                {NAV_ITEMS.map(({
                  label,
                  path,
                  origin,
                }) => (
                  <li key={path}>
                    {routes.some(route => route.path === path)
                      ? <Link to={path}>{label}</Link>
                      : <a href={`${origin}${path}`}>{label}</a>
                    }
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="content">
            <Routes>
              {routes.map(({
                path,
                Component,
              }) => (
                <Route
                  key={path}
                  path={path}
                  element={<Component />}
                />
              ))}
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
