import { findAllTransactions } from "../db/transaction";
import { z } from "zod";
import { Transaction } from "@prisma/client";
import { Context } from "../trpcContext";

export const getTransactionsInputValidation = z.object({
  startDate: z.string().datetime({ offset: true }),
  endDate: z.string().datetime({ offset: true }),
});

type Request = {
  startDate: string;
  endDate: string;
};

type Response = {
  data: Transaction[];
};

export const getTransactionsHandler = async (
  ctx: Context,
  input: Request
): Promise<Response> => {
  const startDate = new Date(input.startDate);
  const endDate = new Date(input.endDate);

  let transactions: Transaction[];
  try {
    transactions = await findAllTransactions(startDate, endDate);
  } catch (e) {
    console.error(e);
    return {
      data: [],
    };
  }

  return {
    data: transactions,
  };
};
