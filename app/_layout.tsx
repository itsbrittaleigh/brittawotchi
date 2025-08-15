import { Stack } from 'expo-router';
import React from 'react';

const _Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _Layout;
