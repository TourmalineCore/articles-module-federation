export interface NavItem {
  label: string,
  path: string,
  origin: string,
}

export interface RouteConfig {
  path: string,
  Component: () => JSX.Element,
}
