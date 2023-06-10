import { initTRPC } from "@trpc/server";
import { helloWorldHandler } from "./handlers/example";
import {
  getTransactionsHandler,
  getTransactionsInputValidation,
} from "./handlers/getTransactions";
import { CreateContext } from "./trpcContext";

const t = initTRPC.context<CreateContext>().create();

export const publicProcedure = t.procedure;

export const trpcRouter = t.router({
  getHelloWorld: publicProcedure.query(() => helloWorldHandler()),
  getTransactions: publicProcedure
    .input(getTransactionsInputValidation)
    .query((opt) => getTransactionsHandler(opt.ctx, opt.input)),
});

export type TrpcRouter = typeof trpcRouter;
