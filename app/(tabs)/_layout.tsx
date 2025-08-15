import { Tabs } from 'expo-router';
import { Calendar, Home, User } from 'react-native-feather';

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', headerTitle: 'Brittawotchi', tabBarIcon: Home }}
      />
      <Tabs.Screen name="history" options={{ title: 'History', tabBarIcon: Calendar }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: User }} />
    </Tabs>
  );
};

export default RootLayout;
