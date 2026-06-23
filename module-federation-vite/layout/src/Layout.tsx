import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import type { RouteConfig } from './types'
import './layout.css'
import { useHostNav } from './hooks/useHostNav'

// eslint-disable-next-line import/no-default-export
export default function Layout({
  routes,
}: {
  routes: RouteConfig[],
}) {
  const navItems = useHostNav()

  return (
    <BrowserRouter>
      <div className="layout">
        <header className="header">
          <span className="header__logo">MF Demo</span>
        </header>
        <div className="body">
          <aside
            className="sidebar"
            data-cy="sidebar"
          >
            <nav data-cy="sidebar-nav">
              <ul>
                {navItems.map(({
                  label,
                  path,
                  origin,
                }) => (
                  <li key={path}>
                    {routes.some(route => route.path === path)
                      ? <Link
                        to={path}
                        data-cy={`nav-link-${label.toLowerCase()}`}
                      >
                        {label}
                      </Link>
                      : 
                      <a
                        href={`${origin}${path}`}
                        data-cy={`nav-link-${label.toLowerCase()}`}
                      >
                        {label}
                      </a>
                    }
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main
            className="content"
            data-cy="page-content"
          >
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
