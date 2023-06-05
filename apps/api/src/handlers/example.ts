import { publicProcedure } from "../trpc";

export const helloWorldHandler = () => publicProcedure.query((opts) => {
  return { text: "Hello, World!" };
});
