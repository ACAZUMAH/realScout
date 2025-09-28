import { StackActions, TabActions } from "@react-navigation/native";
import { navigationRef } from "src/navigation/navigationRef";

export const useAppNavigationWithRef = () => {
  const navigateToTab = (screen: string, params?: object) => {
    if (!navigationRef.isReady()) return;
    return navigationRef.dispatch(TabActions.jumpTo(screen, params));
  };

  const navigateWithRef = (screen: string, params?: object) => {
    if (!navigationRef.isReady()) return;
    return navigationRef.dispatch(StackActions.push(screen, params));
  };

  return { navigateWithRef, navigateToTab };
};
