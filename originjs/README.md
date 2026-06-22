# originjs

Uses `@originjs/vite-plugin-federation`. Navigation is static - defined in `layout/src/nav.ts`.

`@originjs/vite-plugin-federation` does not generate `remoteEntry.js` in dev mode - layout must be built before hosts start. If you change layout source, rebuild: `cd layout && npm run build`, then restart `npm run preview`.

## Dev

Open a separate terminal for each service. Start layout first so its `remoteEntry.js` is available when hosts start.

```bash
cd layout && npm run build && npm run preview
```

To start hosts, use the following command in a separate terminal for each host.

```bash
npm run dev
```

- http://localhost:4000/layout/
- http://localhost:4001/host-a/
- http://localhost:4002/host-b/

## Production

```bash
docker compose up --build
```

- http://localhost:30091/host-a/
