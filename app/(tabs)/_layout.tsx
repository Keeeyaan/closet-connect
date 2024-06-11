import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

import { Tabs } from "expo-router";
import { Text, View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          elevation: 0,
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <View className="items-center space-y-1 ">
              <Entypo name="home" size={24} color={color} />
              <Text className="text-xs font-plight" style={{ color: color }}>
                Home
              </Text>
            </View>
          ),
          tabBarBadge: "1",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="wardrobe"
        options={{
          title: "Wardrobe",
          tabBarIcon: ({ color }) => (
            <View className="items-center space-y-1">
              <MaterialCommunityIcons name="wardrobe" size={24} color={color} />
              <Text className="text-xs font-plight" style={{ color: color }}>
                Wardrobe
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <View className="items-center space-y-1">
              <MaterialIcons name="explore" size={24} color={color} />
              <Text className="text-xs font-plight" style={{ color: color }}>
                Explore
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <View className="items-center space-y-1">
              <FontAwesome name="user" size={24} color={color} />
              <Text className="text-xs font-plight" style={{ color: color }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
