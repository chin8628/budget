import { FlatList, Text, View } from "react-native";

import { trpc } from "../../api";

export default function TabOneScreen() {
  const transactionsQuery = trpc.getTransactions.useQuery();

  return (
    <View>
      <Text>Transactions</Text>
      <FlatList
        data={transactionsQuery.data}
        renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}
