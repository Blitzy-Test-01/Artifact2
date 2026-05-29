'use strict';

/**
 * server.js — Express application entry point.
 *
 * This is the HTTP surface of the Artifact2 project: a single Express `app`
 * instance that hosts both routes and starts the listener. It is the file
 * launched by `npm start` (which runs `node server.js`, per package.json
 * "main" and "scripts.start").
 *
 * Endpoints
 * ---------
 *   GET /              -> "Hello world"   (the originally described baseline)
 *   GET /good-evening  -> "Good evening"  (the newly added endpoint)
 *
 * Both responses are sent as plaintext via `res.send(...)`, letting Express
 * set the `Content-Type` automatically. Any unmatched path falls through to
 * Express's built-in 404 handler.
 *
 * Runtime
 * -------
 *   - Module system: CommonJS (package.json declares no "type": "module").
 *   - Dependency:    express ^5.2.1 (installed in node_modules via `npm install`).
 *   - Node.js:       >= 18 (Express 5 minimum; see package.json "engines").
 *
 * The design is intentionally minimal — a single file with two route handlers
 * on one `app` instance — to match the project's "tutorial" scope. Routers,
 * controllers, services, models, and middleware are deliberately omitted; they
 * are the documented scale-up path, not part of this implementation.
 */

// Import the Express web framework using CommonJS `require`. Express provides
// the application factory, HTTP route registration, the server bootstrap, and
// the response API used below.
const express = require('express');

// Construct the single Express application instance that hosts every route.
const app = express();

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

// GET / — preserves the original "Hello world" baseline behavior. This route
// must remain reachable at the root path and return the exact plaintext body.
app.get('/', (req, res) => res.send('Hello world'));

// GET /good-evening — the newly added endpoint. Returns the exact plaintext
// body "Good evening".
app.get('/good-evening', (req, res) => res.send('Good evening'));

// ---------------------------------------------------------------------------
// Server bootstrap
// ---------------------------------------------------------------------------

// Resolve the listening port from the environment so it is configurable, with
// a sensible default of 3000 for local/tutorial use.
const PORT = process.env.PORT || 3000;

// Start listening for incoming HTTP connections and log the bound port so the
// startup state is observable from the console.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
