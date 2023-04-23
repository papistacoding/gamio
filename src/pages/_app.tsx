import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/fonts.css";
import { IUser } from "@/interface/user";
import { UserProvider } from "@/store/UserProvider";

type AppPropsWithUser = AppProps & {
  user: IUser;
};

export default function App({ Component, pageProps, user }: AppPropsWithUser) {
  return (
    <UserProvider>
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  );
}
