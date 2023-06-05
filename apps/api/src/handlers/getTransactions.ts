import { findAllTransactions } from "../db/transaction";
import { publicProcedure } from "../trpc";

export const getTransactions = () =>
  publicProcedure.query(async (opts) => {
    const transactions = await findAllTransactions();
    return transactions;
  });
