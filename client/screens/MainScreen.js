import React from "react";
import { Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import HomeScreen from "./HomeScreen/HomeScreen";
import AuthScreen from "./AuthScreen/AuthScreen";
import AuthUserScreen from "./AuthUserScreen/AuthUserScreen";
import Validation from "./AuthScreen/Validation";
import UsernameRecovery from './AuthScreen/UsernameRecovery';
import PasswordRecovery from './AuthScreen/PasswordRecovery';
import FormNewPassword from './AuthScreen/FormNewPassword';
import TokenRecovery from './AuthScreen/TokenRecovery';
import SplashScreen from './HomeScreen/SplashScreen';

const Stack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user.data);
  return (
    <>
      <Stack.Navigator headerMode="none">
        {!user ? (
          <>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
             <Stack.Screen name="Validation" component={Validation} />
             <Stack.Screen name="UsernameRecovery" component={UsernameRecovery} />
             <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
             <Stack.Screen name="FormNewPassword" component={FormNewPassword} />
             <Stack.Screen name="TokenRecovery" component={TokenRecovery} />
          </>
        ) : !user.data.token ? null : (
          <Stack.Screen name="AuthUserScreen" component={AuthUserScreen} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default RootStackScreen;