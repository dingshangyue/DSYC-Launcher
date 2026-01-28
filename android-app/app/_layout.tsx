import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./index";
import AccountScreen from "./account/index";
import InstanceScreen from "./instance/index";
import ModScreen from "./mod/index";
import ResourceScreen from "./resource/index";
import SettingsScreen from "./settings/index";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Instance") {
            iconName = focused ? "cube" : "cube-outline";
          } else if (route.name === "Mod") {
            iconName = focused ? "code-slash" : "code-slash-outline";
          } else if (route.name === "Resource") {
            iconName = focused ? "image" : "image-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "主页" }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ title: "账户" }} />
      <Tab.Screen name="Instance" component={InstanceScreen} options={{ title: "实例" }} />
      <Tab.Screen name="Mod" component={ModScreen} options={{ title: "模组" }} />
      <Tab.Screen name="Resource" component={ResourceScreen} options={{ title: "资源" }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: "设置" }} />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
