import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Signup/Signup";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import TaskScreen from "../screens/TaskScreen/TaskScreen";
import Colors from "../assets/Colors";
import fonts from "../assets";


function NavigatorApp() {
    const Stack = createStackNavigator();

    return (
      
            <Stack.Navigator 
            screenOptions={{
                headerTitleStyle: {
                    color:Colors.signupContainer,
                    fontFamily:fonts.ubuntuBoldItalic
                },
                headerTitleAlign: 'center',
          
            }}
            >
                <Stack.Screen name="SignUp" component={Signup} options={{title:'Sign Up'
                }}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen} s />
                <Stack.Screen name="TaskScreen" component={TaskScreen}/>
            </Stack.Navigator>
        
    );
}

export default NavigatorApp;
