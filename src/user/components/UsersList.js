import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = function (props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h1>No Users Found</h1>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.place}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
