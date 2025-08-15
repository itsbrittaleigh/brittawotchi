import { Tabs } from 'expo-router';

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', headerTitle: 'Brittawotchi' }} />
      <Tabs.Screen name="history" options={{ title: 'History' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
};

export default RootLayout;
