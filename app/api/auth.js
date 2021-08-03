import client from "./client";
import endPoints from "./endPoints2";
// import endPoints from "./endPoints";

const login = (username, password) => {
  let body = JSON.stringify({
    username,
    password,
  });
  return client.post(endPoints.login, body);
};

export default {
  login,
};
