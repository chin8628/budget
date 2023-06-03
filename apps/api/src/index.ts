import express, { Express, Request, Response } from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc";

const app: Express = express();
const port = 3000;

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is Express + TypeScript");
});

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
