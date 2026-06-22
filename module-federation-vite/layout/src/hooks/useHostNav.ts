import { useState, useEffect } from 'react'
import { NavItem, NavModule } from '../types'

type NavItemWithOrigin = NavItem & { 
  origin: string, 
}

export function useHostNav(): NavItemWithOrigin[] {
  const [
    navItems,
    setNavItems,
  ] = useState<NavItemWithOrigin[]>([])

  useEffect(() => {
    Promise.all([
      import(`host_a/nav`) as unknown as Promise<NavModule>,
      import(`host_b/nav`) as unknown as Promise<NavModule>,
    ])
      .then(modules => {
        setNavItems(modules.flatMap(module => module
          .navItems
          .map(item => ({
            ...item,
            origin: module.origin,
          }))))
      })
  }, [])

  return navItems
}
