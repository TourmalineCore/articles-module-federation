# module-federation-vite-static-nav

Uses `@module-federation/vite`. Navigation is static - defined in `layout/src/nav.ts`.

## Dev

Open a separate terminal for each service. Start layout first so its `remoteEntry.js` is available when hosts start.

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
