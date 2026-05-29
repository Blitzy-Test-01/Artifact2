# Artifact2

A minimal [Node.js](https://nodejs.org/) tutorial server built with the
[Express.js](https://expressjs.com/) web framework. It exposes two HTTP `GET`
endpoints that return plaintext responses, demonstrating the idiomatic Express
routing pattern in a single entry file (`server.js`).

## Prerequisites

- **Node.js >= 18** — the minimum runtime supported by Express 5.
- **npm** — bundled with Node.js; used to install the project's dependencies.

## Installation

Install the project's dependencies (Express, declared in `package.json`) into
`node_modules/`:

```bash
npm install
```

## Running the server

Start the server:

```bash
npm start
```

This runs `node server.js`. By default the server listens on port **`3000`**.
You can override the port with the `PORT` environment variable (the server
reads `process.env.PORT || 3000`):

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response |
|--------|------|----------|
| GET | `/` | `Hello world` |
| GET | `/good-evening` | `Good evening` |

### Try it

With the server running, exercise both endpoints with `curl`:

```bash
curl http://localhost:3000/
curl http://localhost:3000/good-evening
```

The first request returns `Hello world`; the second returns `Good evening`.
