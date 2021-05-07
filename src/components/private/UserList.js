import React, { useState, useEffect } from "react";
import ApiUtils from "./ApiUtils.js";
import UserFollow from "./UserFollow.js";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  const fetchUser = () => {
    ApiUtils(`users`).then((json) => setUserList(json));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(userList);

  return (
    <div>
      {userList.map((user, index) => (
        <UserFollow
          user={user}
          username={user.username}
          following={user.following}
          followingCount={user.followingCount}
          followersCount={user.followersCount}
          id={user.id}
          avatar={`https://i.pravatar.cc/30?img=${index + 1}`}
        />
      ))}
    </div>
  );
}
