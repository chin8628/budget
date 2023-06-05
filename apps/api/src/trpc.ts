import { initTRPC } from "@trpc/server";
import { helloWorldHandler } from "./handlers/example";
import { getTransactions } from "./handlers/getTransactions";

const t = initTRPC.create();

export const publicProcedure = t.procedure;

export const trpcRouter = t.router({
  getHelloWorld: helloWorldHandler(),
  getTransactions: getTransactions(),
});

export type TrpcRouter = typeof trpcRouter;
