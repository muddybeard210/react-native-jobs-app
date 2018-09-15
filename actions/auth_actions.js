import { AsyncStorage } from "react-native";
import { Facebook } from "expo";
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";

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
    //Start up FB login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    "1944684085595530",
    {
      permissions: ["public_profile"]
    }
  );
  // anytime a user either cancels the login or enters in wrong information, type will equal 'cancel' so we can use that info to do logic off of the type
  if (type === "cancel") {
    return dispatch({
      type: FACEBOOK_LOGIN_FAIL
    });
  }

  //The user has logged in at this point
  await AsyncStorage.setItem("fb_token", token);
  dispatch({
    type: FACEBOOK_LOGIN_SUCCESS,
    payload: token
  });
};
