import { publicProcedure } from "../trpc";

export const createHelloWorldResolver = () => publicProcedure.query((opts) => {
  return { text: "Hello, World!" };
});
