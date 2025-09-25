import { openAuthSessionAsync } from "expo-web-browser";
import { OAuthProvider } from "react-native-appwrite";
import { useAppAuthentication } from "src/hooks/useAppAuthentication";
import { prefix } from "src/navigation/linking";
import { account } from "src/services";

export const useSignin = () => {
  const { signin } = useAppAuthentication();

  const useGoogleSignin = async (): Promise<boolean> => {
    try {
      const redirectUrl = prefix;

      const res = account.createOAuth2Token({
        provider: OAuthProvider.Google,
        success: redirectUrl,
        failure: redirectUrl,
      });

      if (!res) throw new Error("No response from OAuth sign-in");

      const browserResult = await openAuthSessionAsync(
        res.toString(),
        redirectUrl
      );

      if (browserResult.type !== "success")
        throw new Error("Authentication was not successful");

      const url = new URL(browserResult.url);

      const secret = url.searchParams.get("secret")?.toString();

      const userId = url.searchParams.get("userId")?.toString();

      if (!secret || !userId)
        throw new Error("Missing secret or userId in the response");

      const session = await account.createSession({ userId, secret });

      if (!session) throw new Error("Failed to create session");

      signin(session);

      return true;
    } catch (error) {
      console.log("Error during sign-in:", error);
      return false;
    }
  };

  return { useGoogleSignin };
};
