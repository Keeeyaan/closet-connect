import { Ionicons } from "@expo/vector-icons";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import { CalendarProvider, ExpandableCalendar } from "react-native-calendars";

const Home = () => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="px-4 flex-row items-center justify-between">
        <View className="flex-row">
          <View className="h-12 mr-2 w-12 rounded-full bg-gray-400" />
          <View>
            <Text className="font-pregular text-gray-500">Welcome 👋</Text>
            <Text className="text-base font-psemibold">
              Kean Jieden Villaflor
            </Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <View className="flex-1">
        <CalendarProvider date="2024-06-10">
          <ExpandableCalendar />
        </CalendarProvider>
      </View>
    </SafeAreaView>
  );
};

export default Home;
