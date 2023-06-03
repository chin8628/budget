import { initTRPC } from "@trpc/server";
import { createHelloWorldResolver } from './resolvers/example';

const t = initTRPC.create();

export const publicProcedure = t.procedure;

export const trpcRouter = t.router({
  getHelloWorld: createHelloWorldResolver()
});

export type TrpcRouter = typeof trpcRouter;
