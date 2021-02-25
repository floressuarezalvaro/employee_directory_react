import React from "react";

function Card(props) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <p>Name:</p> {props.firstName} {props.lastName}
          </li>
          <li>
            <p>Email:</p> {props.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
