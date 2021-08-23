import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenTest from "../screens/ScreenTest";
import Scanner from "./../components/Scanner";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={() => console.log("Pressed")} />
        </DrawerContentScrollView>
      );
    }}
  >
    <Drawer.Screen
      name="NFC Reader"
      component={ScreenTest}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="nfc" color={color} size={size} />
        ),
      }}
    />
    <Drawer.Screen
      name="QR Scanner"
      component={Scanner}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="qrcode-scan"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
