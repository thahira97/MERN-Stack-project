import React from "react";
import UsersList from "../components/UsersList";

const Users = function () {
  const USERS = [
    {
      id: "u2",
      name: "Thahira",
      image:
        "https://images.pexels.com/photos/5206279/pexels-photo-5206279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      place: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
