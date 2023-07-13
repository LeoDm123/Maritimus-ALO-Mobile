import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../constants/styles";
import { COLORS } from "../constants";
import { LoginMail, LoginPass } from "../components/Inputs";
import { LoginButton, RegisterButton } from "../components/Buttons";
import { FacebookLoginButton, GoogleLoginButton } from "../components/Buttons";

const Home = () => {
    const navigation = useNavigation();

    const handleFacebookLogin = async () => {
        try {
          const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
          if (result.isCancelled) {
            console.log('Facebook login cancelled');
          } else {
            const tokenData = await AccessToken.getCurrentAccessToken();
            console.log('Facebook access token:', tokenData.accessToken.toString());
          }
        } catch (error) {
          console.log('Facebook login error:', error);
        }
      };
      
    const handleGoogleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log('Google user info:', userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('Google login cancelled');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Google login is already in progress');
          } else {
            console.log('Google login error:', error);
          }
        }
      };
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.gray }}>

            {/* ----------------------------LOGO----------------------------- */}
            <View style={styles.LogoLayout}>
                <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                    <Image style={styles.LogoSize} source={assets.logo2}/>
                </TouchableOpacity>
            </View>
            {/* ----------------------------LOGO----------------------------- */}

            {/* ----------------------------LOGIN----------------------------- */}
                <View style={styles.LoginLayout}>
                    <View>
                        <Text style={styles.Title}>¡Bienvenido de vuelta!</Text>
                        <LoginMail/>
                        <LoginPass/>
                        <View style={styles.LogButtonsLayout}>
                            <RegisterButton/>
                            <LoginButton handlePress={() => navigation.navigate("Main")}/>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"center", padding:20}}>
                        <Text style={styles.TextM}>- O -</Text>
                    </View>

                    {/* -----------------ALTERNATIVE LOGIN--------------- */}
                    <View>
                        <FacebookLoginButton handlePress={handleFacebookLogin}/>
                        <GoogleLoginButton handlePress={handleGoogleLogin} />
                    </View>
                    {/* -----------------ALTERNATIVE LOGIN--------------- */}

                </View>
            {/* ----------------------------LOGIN----------------------------- */}


        </SafeAreaView>
    );
};

export default Home;
