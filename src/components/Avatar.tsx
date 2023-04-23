import React, { useContext } from "react";
import classes from "./Avatar.module.css";
import { UserContext } from "@/store/UserProvider";
import { IUser } from "@/interface/user";

export const Avatar: React.FC = () => {
  const user: IUser | null = useContext(UserContext);
  console.log(user);

  return (
    <div className={classes.wrapper}>
      <img className={classes.avatarImage} src={user?.AvatarUrl} alt="Avatar" />
      <div className={classes.infoWrapper}>
        <div className={classes.playerName}>
          <h2 className="color-dark">{user?.Name}</h2>
          <h5 className="color-gray">@{user?.Username}</h5>
        </div>
        <span className={`${classes.level} color-blue`}>{user?.level}</span>
      </div>
    </div>
  );
};
