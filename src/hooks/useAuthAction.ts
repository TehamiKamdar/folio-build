import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const useAuthAction = () => {
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isSignedIn) {
      navigate("/dashboard");
    } else {
      openSignIn({
        afterSignInUrl: "/dashboard",
        afterSignUpUrl: "/dashboard",
      });
    }
  };

  return handleAuthAction;
};