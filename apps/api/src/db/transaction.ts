import { dbInstance } from "../prisma";

export const findAllTransactions = async () => {
  const transaction = await dbInstance.transaction.findMany({ take: 10, orderBy: { createdAt: "desc" } });
  return transaction;
};
