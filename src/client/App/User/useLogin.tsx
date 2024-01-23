import { useGoogleLogin as googleLogin } from "@react-oauth/google";
import axios from "axios";
import { translate } from "../../../i18n/utils";
import { useToast } from "../../validation";
import { Severity } from "../../validation/ToastContext";
import useUser from "./useUser";

export default function useLogin() {
  const { setUser } = useUser();
  const { setToastMessage, setSeverity, setOpenToast } = useToast();

  const login = googleLogin({
    onSuccess: async ({ code }) => {
      const user = await axios.post(`/auth/google`, {
        code,
      });

      setUser(user.data);
      setToastMessage(translate("login_successful"));
      setSeverity(Severity.Success);
      setOpenToast(true);
    },
    onError: (error) => {
      console.log("Error ", error);
      setToastMessage(translate("login_failed"));
      setSeverity(Severity.Error);
      setOpenToast(true);
    },
    flow: "auth-code",
  });
  return login;
}
