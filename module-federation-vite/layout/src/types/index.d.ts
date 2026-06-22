export interface NavItem {
  label: string,
  path: string,
}

export interface NavModule {
  origin: string,
  navItems: NavItem[],
}

export interface RouteConfig {
  path: string,
  Component: () => JSX.Element,
}
