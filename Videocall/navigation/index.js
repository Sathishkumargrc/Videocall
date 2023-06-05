import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/HomeScreen";
import ConferenceScreen from "../src/screens/ConferenceScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <Stack.Navigator screenOptions={{
            header : () => null
        }}initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Conference" component={ConferenceScreen} />
        </Stack.Navigator>
    )
}

export default Navigation;