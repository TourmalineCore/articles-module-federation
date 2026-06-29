# Articles-module-federation

Three example projects demonstrating Module Federation with Vite. The projects differ in plugin and navigation approach but share the same overall structure.

**host-a** — Service A with Home and About pages. Loads the `Layout` component from the **layout** remote and passes its routes to it.

**host-b** — Service B with Dashboard and Reports pages. Loads the `Layout` component from the **layout** remote and passes its routes to it.

**layout** — a remote that contains the `Layout` component: header, sidebar with navigation, and content area. The component is consumed by hosts via Module Federation.

| Project | Plugin | Navigation |
|---------|--------|------------|
| [module-federation-vite](./module-federation-vite/) | `@module-federation/vite` | Dynamic: hosts export their nav items via MF, layout loads them at runtime |
| [module-federation-vite-static-nav](./module-federation-vite-static-nav/) | `@module-federation/vite` | Static. Defined in `layout/src/nav.ts` |
| [originjs](./originjs/) | `@originjs/vite-plugin-federation` | Static. Defined in `layout/src/nav.ts` |

Detailed instructions for running each project can be found in their respective READMEs.
