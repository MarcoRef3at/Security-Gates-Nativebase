import {
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync,
} from "expo-local-authentication";
import authStorage from "../auth/storage";

const biometricsAuth = async () => {
  const compatible = await hasHardwareAsync();
  if (!compatible)
    throw "This device is not compatible for biometric authentication";
  const enrolled = await isEnrolledAsync();
  if (!enrolled)
    throw "This device doesn't have biometric authentication enabled";
  const result = await authenticateAsync();
  if (!result.success) throw `${result.error} - Authentication unsuccessful`;

  return await authStorage.validateToken();
};
export default biometricsAuth;