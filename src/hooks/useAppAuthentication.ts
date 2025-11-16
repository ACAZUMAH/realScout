import { useCallback } from "react";
import { authenticationActions } from "src/redux/reducers/auth";
import { account, avatar } from "src/services";
import { useAppDispatch, useAppSelector } from "./useAppReduxHooks";

export const useAppAuthentication = () => {
  const dispatch = useAppDispatch();
  const authentication = useAppSelector((state) => state.authentication);
  
  const signin = useCallback(
    async (session?: any) => {
      const res = await account.get();
      if (res.$id) {
        const userAvatar = avatar.getInitialsURL(res.name);
        dispatch(
          authenticationActions.update({
            user: { ...res, avatar: userAvatar.toString() },
            session,
            isAuthenticated: true,
          })
        );   
      }
    },
    [dispatch]
  );

  const signout = useCallback(async () => {
    const result = await account.deleteSession({ sessionId: "current" });
    if (!result) return;
    dispatch(authenticationActions.reset());
  }, [dispatch]);

  return { ...authentication, signin, signout };
};
