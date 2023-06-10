import { inferAsyncReturnType } from '@trpc/server';

export const createContext = async () => {
  return {};
};

export type CreateContext = typeof createContext

export type Context = inferAsyncReturnType<typeof createContext>;
