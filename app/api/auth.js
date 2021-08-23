import client from "./client";
import endPoints from "./endPoints";
// import endPoints from "./endPoints";

const login = (username, password) => {
  let body = JSON.stringify({
    Mail: username,
    Pswd: password,
  });
  return client.post(endPoints.login, body);
};

export default {
  login,
};
