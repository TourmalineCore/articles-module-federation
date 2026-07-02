# originjs

Uses the `@originjs/vite-plugin-federation` plugin. Navigation is static: nav items are defined in `layout/src/nav.ts` and bundled at build time.

> **Important:** `@originjs/vite-plugin-federation` does not generate a remote entry in dev mode. Layout must be **built** and started via `preview` before the hosts can start. If you change layout source files — rebuild and restart `preview`.

## Prerequisites

- [Docker](https://www.docker.com/get-started/) (needed for Dev Containers and Docker Compose)

### If you develop inside Dev Containers

- [VSCode](https://code.visualstudio.com/)
- [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### If you develop using good old Node.js (no Dev Containers)

- [Node.js](https://nodejs.org/en) (version 24 was used; ideally install using `nvm` which will allow you to easily switch between Node.js versions if needed)
- [VSCode](https://code.visualstudio.com/) (optional, you can use any IDE but VSCode has configured formatting on save by the lint rules of the project)

## Dev Containers

If you open this project in VSCode please install the Dev Containers extension and agree to re-open this project's folder in it. All required extensions (ESLint, Stylelint) will be installed automatically.

The Dev Container runs with the `--network=host` flag, so ports 4000, 4001, 4002, and 30091 are automatically forwarded to your machine and visible in the **Ports** tab in VSCode.

Cypress GUI (`cypress:open` scripts) is not supported inside Dev Containers. Use headless mode (`cypress:run` scripts) instead.

>Note: There is an issue that Cypress doesn't see Chrome from inside a Dev Container for arm64 platforms. In that case replace `--browser chrome` with `--browser electron` in the Cypress scripts.

## Install Dependencies

Run once before the first start to install dependencies in all packages:

```bash
npm ci
cd layout && npm ci && cd ..
cd host-a && npm ci && cd ..
cd host-b && npm ci && cd ..
```

## Local Run

Each service starts on its own port. Each one reads the URLs of its neighbors from `.env.local` — absolute addresses in the form `http://localhost:<port>`. Layout must be built and started via `preview` first — only then can the hosts start. Open a separate terminal for each application.

**Terminal 1 — layout (build and preview):**
```bash
cd layout
npm run build
npm run preview
```

**Terminal 2 — host-a:**
```bash
cd host-a
npm run dev
```

**Terminal 3 — host-b:**
```bash
cd host-b
npm run dev
```

Services are available at:

| Service | URL                           |
|---------|-------------------------------|
| layout  | http://localhost:4000/layout/ |
| host-a  | http://localhost:4001/host-a/ |
| host-b  | http://localhost:4002/host-b/ |

If you changed layout source files — rebuild and restart:
```bash
cd layout
npm run build
npm run preview
```

## Docker

When running via Docker Compose, all three applications are placed behind a single nginx reverse proxy on one host and port: `http://localhost:30091`. In this mode services read neighbor URLs from `.env.same-host` — relative paths like `/layout/layout.js` instead of absolute addresses.

Before starting, make sure port 30091 is free:
```bash
lsof -i :30091
```
If the command returns nothing — the port is free.

```bash
docker compose up --build
```

Hot reload does not work in this mode. When source files change, run a rebuild with the `--build` flag, otherwise Docker uses cached images.

Open: http://localhost:30091/host-a/

To stop:
```bash
docker compose down
```

## Tests

Run e2e tests against locally running services (multi-host mode, each service on its own port):
```bash
npm run cypress:run:e2e
```

Run e2e tests against Docker Compose (same-host mode, everything on port 30091):
```bash
npm run cypress:run:e2e:same-host
```

Open Cypress in interactive mode:
```bash
npm run cypress:open:e2e
# or for same-host mode:
npm run cypress:open:e2e:same-host
```

>Note: Cypress GUI is not available inside Dev Containers — use `cypress:run` scripts.

## Linting

Run from any of the application folders:
```bash
npm run lint
```
