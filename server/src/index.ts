import dotenv from "dotenv";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const serverRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

dotenv.config({ path: resolve(serverRoot, ".env") });
dotenv.config({ path: resolve(serverRoot, "../.env") });

const { createApp } = await import("./app.js");

const port = Number(process.env.PORT ?? 3001);

createApp().listen(port, () => {
  console.log(`Masār server listening on port ${port}`);
});
