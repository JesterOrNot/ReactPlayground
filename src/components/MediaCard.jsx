import React from "react";

export default function MediaCard({ title, body, imageUrl }) {
  return (
    <div className="MediaCard">
      <img alt="" src={imageUrl} />
      <div className="MediaCardText">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}
