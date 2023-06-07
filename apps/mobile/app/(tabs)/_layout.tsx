import { Tabs } from "expo-router";
import { Icon } from '@rneui/themed';
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color }) => <Icon type="font-awesome-5" name="wallet" />,
        }}
      />
    </Tabs>
  );
}
