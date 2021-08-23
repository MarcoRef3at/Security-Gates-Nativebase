import * as SecureStore from "expo-secure-store";
import endPoints from "../api/endPoints";
// import jwtDecode from "jwt-decode";
import client from "./../api/client";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
    const token = await getToken();
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const setValidationStatus = async (value) => {
  try {
    await SecureStore.setItemAsync("tokenIsValid", value);
  } catch (error) {
    console.log("value:", value);
    console.log("Error storing the token Validation", error);
  }
};

const removeValidationStatus = async () => {
  try {
    await SecureStore.deleteItemAsync("tokenIsValid");
  } catch (error) {
    console.log("Error removing the token validation status", error);
  }
};

const getValidationStatus = async () => {
  try {
    return await SecureStore.getItemAsync("tokenIsValid");
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const validateToken = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let token = await getToken();

      return await client
        .get(endPoints.me, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setValidationStatus("true");
          resolve(res);
        })
        .catch((e) => {
          removeValidationStatus();
          removeToken();
          reject(e);
        });
    } catch (error) {
      removeValidationStatus();
      console.log("Error Verifying token", error);
      reject(error);
    }
  });
};

const getUser = async () => {
  // const token = await getToken();
  // return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default {
  getToken,
  getUser,
  getValidationStatus,
  removeToken,
  setValidationStatus,
  storeToken,
  validateToken,
  removeValidationStatus,
};
