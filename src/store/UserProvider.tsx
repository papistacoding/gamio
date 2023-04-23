import { createContext, useEffect, useState } from 'react';
import { IUser } from '@/interface/user';

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<IUser | null>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const myHeaders = new Headers();
        myHeaders.append("xc-token", "qlz9Adt_7mKIBz9ZPvbaupx-qc0K-v8czQDMI-cj");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
        };

        const response = await fetch(
          "https://staging-nocodb.gamio.gg/api/v1/db/data/v1/Gamio-frontend-task/User/0",
          requestOptions
        );

        const user = await response.json();

        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
