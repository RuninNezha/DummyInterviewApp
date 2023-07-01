import React, { Fragment, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

import { usersData } from "@/data/Users-data";
import UserData from "./UserData";

const Users = (props) => {
  const [userId, setUserId] = useState(usersData[0]);
  const userHandler = (id) => {
    const activeUser = usersData.filter((user) => user.id === id);
    setUserId(...activeUser);
  };

  return (
    <Fragment>
      <div className={classes.users}>
        <div>
          {usersData.map((item) => (
            <User
              key={item.id}
              id={item.id}
              firstName={item.name["firstname"]}
              lastName={item.name["lastname"]}
              onId={userHandler}
            />
          ))}
        </div>
        <div className={classes.data}>
          <UserData userId={userId} />
        </div>
      </div>
    </Fragment>
  );
};

export default Users;
