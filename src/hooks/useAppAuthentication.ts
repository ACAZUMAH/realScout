import { useCallback } from "react";
import { authenticationActions } from "src/redux/reducers/auth";
import { account, avatar } from "src/services";
import { useAppDispatch, useAppSelector } from "./useAppReduxHooks";

export const useAppAuthentication = () => {
  const dispatch = useAppDispatch();
  const authentication = useAppSelector((state) => state.authentication);
  //console.log("Authentication state:", authentication);
  const signin = useCallback(
    async (session?: any) => {
      const res = await account.get();
      if (res.$id) {
        const userAvatar = avatar.getInitials({ name: res.name });
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

  const signout = useCallback(() => {
    dispatch(authenticationActions.reset());
  }, [dispatch]);

//   const getUser = async () => {
//     try {
//       const res = await account.get();

//       if (res.$id) {
//         const userAvatar = avatar.getInitials({ name: res.name });
//         dispatch(
//           authenticationActions.update({ user: { ...res, avatar: userAvatar } })
//         );
//       }
//     } catch (error) {}
//   };

  return { ...authentication, signin, signout };
};
