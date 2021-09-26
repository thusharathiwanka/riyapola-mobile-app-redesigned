import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import ChangeEmail from "./app/screens/ChangeEmail";
import Changepassword from "./app/screens/Changepassword";
import ForgotpasswordScreen from "./app/screens/ForgotpasswordScreen";
import HomeScreen from "./app/screens/HomeScreen";
import LoadingScreen from "./app/screens/LoadingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import NewListingScreen from "./app/screens/NewListingScreen";
import PersonalData from "./app/screens/Personaldata";
import Search from "./app/screens/Search";
import SearchFilter from "./app/screens/SearchFilter";
import SignupScreen from "./app/screens/SignupScreen";
import SingleItem from "./app/screens/SingleItem";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const getFonts = () =>
	Font.loadAsync({
		"poppins-regular": require("./app/assets/fonts/Poppins-Regular.ttf"),
		"poppins-medium": require("./app/assets/fonts/Poppins-Medium.ttf"),
		"poppins-bold": require("./app/assets/fonts/Poppins-Bold.ttf"),
	});

export default function App({ navigation }) {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (fontLoaded) {
		return (
			<NavigationContainer>
				<AuthNavigator />
			</NavigationContainer>
		);
	} else {
		return (
			<>
				<AppLoading
					startAsync={getFonts}
					onFinish={() => setFontLoaded(true)}
					onError={(err) =>
						console.error("error occurred while loading fonts", err)
					}
				/>
			</>
		);
	}
}
