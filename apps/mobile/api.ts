import { createTRPCReact } from "@trpc/react-query";
import type { TrpcRouter } from "../api/src/trpc";

export const trpc = createTRPCReact<TrpcRouter>();