import { dbInstance } from "../prisma";

export const findAllTransactions = async (startDate: Date, endDate: Date) =>
  dbInstance.transaction.findMany({
    orderBy: { createdAt: "desc" },
    where: {
      transactionDate: {
        lte: endDate,
        gte: startDate,
      },
    },
  });
