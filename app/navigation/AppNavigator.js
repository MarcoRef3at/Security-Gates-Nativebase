import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenTest from "./../screens/ScreenTest";
const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="NFC Reader"
      component={ScreenTest}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="nfc" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="QR Scanner"
      component={ScreenTest}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="qrcode-scan"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
