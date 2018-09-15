import { AsyncStorage } from "react-native";
import { Facebook } from "expo";
import { FACEBOOK_LOGIN_SUCCESS } from "./types";

//Storage works like local storage but its async so it returns a promise...
//AsyncStorage.setItem("fb_token", token);
//AsyncStorage.getItem("fb_token")

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem("fb_token");
  if (token) {
    //Dispatch an action saying that FB login is done
    dispatch({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: token
    });
  } else {
    doFacebookLogin();
    //Start up FB login process
  }
};

const doFacebookLogin = async () => {
  let result = await Facebook.logInWithReadPermissionsAsync(
    "1944684085595530",
    {
      permissions: ["public_profile"]
    }
  );
};
