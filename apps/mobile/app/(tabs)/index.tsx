import { FlatList, Text, View } from "react-native";

import { trpc } from "../../api";

export default function TabOneScreen() {
  const today = new Date();
  const firstDayOfCurrentMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );
  const lastDayOfCurrentMonth = new Date(
    today.getFullYear(),
    (today.getMonth() + 1) % 12,
    1
  );

  const { data: transactions, error } = trpc.getTransactions.useQuery({
    startDate: firstDayOfCurrentMonth.toISOString(),
    endDate: lastDayOfCurrentMonth.toISOString(),
  });

  return (
    <View>
      <Text>Transactions</Text>
      {error && <Text>{error.message}</Text>}
      <FlatList
        data={transactions?.data}
        renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}
