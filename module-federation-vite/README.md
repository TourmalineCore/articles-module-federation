# module-federation-vite

Uses `@module-federation/vite`. Navigation is dynamic - each host exposes its nav items via Module Federation, layout loads them at runtime.

## Dev

Open a separate terminal for each service.

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
