import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import "./UserItem.css"


const UserItem = function (props){
  return <li className="user-item">
    <div className="user-item__content">
      <div className="user-item-image">
        <Avatar image={props.image} alt={props.name} />
      </div>
      <div className="user-item__info">
        <h2>{props.name}</h2>
        <h3>{props.placeCount} {props.placeCount > 1 ? "Places" : "Place"}</h3>
      </div>
    </div>
  </li>
}

export default UserItem