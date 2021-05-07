import React, { useState, useEffect } from "react";
import ApiUtils from "./ApiUtils.js";
import UserFollow from "./UserFollow.js";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  const fetchUser = () => {
    ApiUtils(`users`).then((json) => setOrderedUsers(json));
  };

  const setOrderedUsers = (users, direction = 1) => {
    const u = users.sort((a, b) => {
      return a.followersCount < b.followersCount ? direction : -direction;
    });
    setUserList(u);
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
          followers={user.followers}
        />
      ))}
    </div>
  );
}
