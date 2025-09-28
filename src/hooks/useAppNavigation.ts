import { StackActions, TabActions, useNavigation } from "@react-navigation/native";

export const useAppNavigation = () => {
  const navigation = useNavigation();

  const navigate = (screen: string, params?: object) => {
    return navigation.dispatch(StackActions.push(screen, params));
  };

  const navigateToTab = (screen: string, params?: object) => {
    return navigation.dispatch(TabActions.jumpTo(screen, params));
  }

  const navigateBack = () => {
    return navigation.dispatch(StackActions.pop());
  }

  const navigateByReplace = (screen: string, params?: object) => {
    return navigation.dispatch(StackActions.replace(screen, params));
  }

  return { navigate, navigateBack, navigateToTab, navigateByReplace };
};
