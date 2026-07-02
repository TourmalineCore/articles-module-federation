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
    Promise.allSettled([
      import(`host_a/nav`) as unknown as Promise<NavModule>,
      import(`host_b/nav`) as unknown as Promise<NavModule>,
    ])
      .then(results => {
        const modules = results
          .filter((result): result is PromiseFulfilledResult<NavModule> => result.status === `fulfilled`)
          .map(result => result.value)

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
