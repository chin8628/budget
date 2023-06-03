import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const router = typeof t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;