import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { trpc } from "../../api";

export default function TabOneScreen() {
  const transactionsQuery = trpc.getTransactions.useQuery();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        data={transactionsQuery.data}
        renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
